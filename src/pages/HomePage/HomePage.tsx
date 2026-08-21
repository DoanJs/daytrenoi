import "./HomePage.css";
import { useMemo, useRef, useState } from "react";
import { homeQuickTestData } from "./HomePage.data";
import { HomePageData, HomeQuickTestConfig, QuickTestBand, QuickTestKey, QuickTestLevel } from "./HomePage.types";


type AnswerMap = Record<number, number>;

type RenderItem = {
  index: number;
  question?: string;
  reverse?: 0 | 1;
  group?: string;
  isHeader?: boolean;
};

type FlaggedItem = {
  group?: string;
  question: string;
  high: boolean;
  kind: "miss" | "has";
};

function Html({ value }: { value: string }) {
  return <span dangerouslySetInnerHTML={{ __html: value }} />;
}

function HomeQuickTest() {
  const [testKey, setTestKey] = useState<QuickTestKey>("tu-ky");
  const [age, setAge] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [resultBand, setResultBand] = useState<QuickTestBand | null>(null);
  const [resultScore, setResultScore] = useState(0);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement | null>(null);

  const test = homeQuickTestData[testKey] as HomeQuickTestConfig;

  const items = useMemo<RenderItem[]>(() => {
    if (test.ageGroups) {
      const group = test.ageGroups.find((item) => item[0] === age);
      return group
        ? group[2].map((question, index) => ({ index, question, reverse: 0 }))
        : [];
    }

    if (test.groups) {
      const output: RenderItem[] = [];
      let index = 0;
      test.groups.forEach(([groupName, questions]) => {
        output.push({ index: -1, group: groupName, isHeader: true });
        questions.forEach((question) => {
          output.push({ index, question, reverse: 0, group: groupName });
          index += 1;
        });
      });
      return output;
    }

    return (test.items || []).map(([question, reverse], index) => ({
      index,
      question,
      reverse,
    }));
  }, [test, age]);

  const answerable = items.filter((item) => !item.isHeader);
  const done = answerable.filter((item) => answers[item.index] !== undefined).length;

  const score = useMemo(() => {
    return answerable.reduce((total, item) => {
      const answerIndex = answers[item.index];
      if (answerIndex === undefined) return total;

      const normalPoints = test.scale[answerIndex][1];
      if (item.reverse !== 1) return total + normalPoints;

      const reversedIndex = test.scale.length - 1 - answerIndex;
      return total + test.scale[reversedIndex][1];
    }, 0);
  }, [answerable, answers, test]);

  const flagged = useMemo<FlaggedItem[]>(() => {
    const output: FlaggedItem[] = [];
    answerable.forEach((item) => {
      const answerIndex = answers[item.index];
      if (answerIndex === undefined || !item.question) return;

      let points = test.scale[answerIndex][1];
      if (item.reverse === 1) {
        points = test.scale[test.scale.length - 1 - answerIndex][1];
      }
      if (points < 1) return;

      output.push({
        group: item.group,
        question: item.question,
        high: points >= 2,
        kind: item.reverse === 1 ? "has" : test.pos0 ? "miss" : "has",
      });
    });
    return output;
  }, [answerable, answers, test]);

  const reset = (keepAge = true) => {
    setAnswers({});
    setResultBand(null);
    setResultScore(0);
    setError("");
    if (!keepAge) setAge(null);
  };

  const selectTest = (key: QuickTestKey) => {
    setTestKey(key);
    setAge(null);
    reset(false);
  };

  const handleResult = () => {
    if (test.ageGroups && !age) {
      setError("Bạn chọn nhóm tuổi của con trước nhé.");
      return;
    }
    if (done < answerable.length) {
      setError(`Còn ${answerable.length - done} câu chưa trả lời. Bạn trả lời hết để kết quả chính xác nhé.`);
      return;
    }

    const band =
      test.bands.find(([min, max]) => score >= min && score <= max) ||
      test.bands[test.bands.length - 1];

    setError("");
    setResultScore(score);
    setResultBand(band);
    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  };

  const renderFlagBlock = (title: string, list: FlaggedItem[]) => {
    if (!list.length) return null;
    let previousGroup = "";
    return (
      <>
        <div className="tn-fg">{title} · {list.length} câu</div>
        <ul className="tn-flags">
          {list.map((item, index) => {
            const showGroup = Boolean(item.group && item.group !== previousGroup);
            if (item.group) previousGroup = item.group;
            return (
              <div key={`${item.question}-${index}`}>
                {showGroup ? <li className="group">{item.group}</li> : null}
                <li className={item.high ? "hi" : "mid"}><Html value={item.question} /></li>
              </div>
            );
          })}
        </ul>
      </>
    );
  };

  const maxScore = answerable.length * 2;
  const position = maxScore ? Math.min(resultScore, maxScore) / maxScore * 100 : 0;
  const miss = flagged.filter((item) => item.kind === "miss");
  const has = flagged.filter((item) => item.kind === "has");
  const level = resultBand?.[2] as QuickTestLevel | undefined;
  const actions = level ? test.actions[level] || [] : [];

  return (
    <section id="test-nhanh">
      <div className="wrap">
        <div className="center" style={{ marginBottom: "26px" }}>
          <div className="eyebrow">Miễn phí · không cần để lại thông tin</div>
          <h2>Bốn bài test nhanh cho cha mẹ</h2>
          <p className="lead">
            Bộ câu hỏi rút ra từ chính bộ bảng kiểm chúng tôi dùng trong phòng khám. Anh/chị chỉ mất hai phút và thấy kết quả ngay — không phải điền số điện thoại mới được xem.
          </p>
        </div>

        <div className="tn-wrap">
          <div className="tn-tabs">
            {(Object.keys(homeQuickTestData) as QuickTestKey[]).map((key) => {
              const tab = homeQuickTestData[key];
              return (
                <button
                  type="button"
                  key={key}
                  className={`tn-tab ${key === testKey ? "on" : ""}`}
                  onClick={() => selectTest(key)}
                >
                  <span className="i">{tab.icon}</span>
                  <b>{tab.title}</b>
                  <span>{tab.sub}</span>
                </button>
              );
            })}
          </div>

          <div className="tn-body">
            <p className="tn-intro"><Html value={test.intro} /></p>

            {test.ageGroups ? (
              <div className="tn-age">
                <span className="tn-age-label">Con bạn mấy tuổi?</span>
                {test.ageGroups.map(([id, label]) => (
                  <button
                    type="button"
                    key={id}
                    className={age === id ? "on" : ""}
                    onClick={() => {
                      setAge(id);
                      reset(true);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            ) : null}

            <div className="tn-questions">
              {test.ageGroups && !age ? (
                <p className="muted" style={{ padding: "18px 0" }}>Chọn nhóm tuổi của con để bắt đầu.</p>
              ) : (
                items.map((item, itemIndex) => {
                  if (item.isHeader) {
                    return <div className="tn-gh" key={`header-${itemIndex}`}>{item.group}</div>;
                  }
                  return (
                    <div className="tn-q" key={`${testKey}-${age || "all"}-${item.index}`}>
                      <p><Html value={item.question || ""} /></p>
                      <div className="tn-opts">
                        {test.scale.map(([label], optionIndex) => (
                          <label key={label} className={answers[item.index] === optionIndex ? "selected" : ""}>
                            <input
                              type="radio"
                              name={`${testKey}-q-${item.index}`}
                              checked={answers[item.index] === optionIndex}
                              onChange={() => {
                                setAnswers((current) => ({ ...current, [item.index]: optionIndex }));
                                setResultBand(null);
                                setError("");
                              }}
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="tn-foot">
              <button type="button" className="btn p" onClick={handleResult}>Xem kết quả</button>
              <button type="button" className="btn s" onClick={() => reset(true)}>Làm lại</button>
              <span className="tn-prog">
                {answerable.length ? `Đã trả lời ${done}/${answerable.length} câu` : ""}
              </span>
            </div>

            {error ? <div className="tn-error">{error}</div> : null}

            {resultBand ? (
              <div ref={resultRef} className={`tn-res on ${resultBand[2]}`}>
                <div className="tn-top">
                  <div className="tn-num">
                    <b>{resultScore}</b>
                    <span>trên {maxScore} điểm</span>
                  </div>
                  <div className="tn-meta">
                    <div className="lv">Kết quả · {test.title}</div>
                    <h4>{resultBand[3]}</h4>
                  </div>
                </div>

                <div className="tn-bar">
                  {test.bands.map((band, index) => {
                    const width = maxScore ? ((band[1] - band[0] + 1) / (maxScore + 1)) * 100 : 0;
                    return <i key={index} className={`zone z${index + 1}`} style={{ flex: `0 0 ${width}%` }} />;
                  })}
                  <i className="dot" style={{ left: `${position}%` }} />
                </div>

                <p><Html value={resultBand[4]} /></p>

                <div className="tn-block">
                  <b className="bh">📑 Phân tích từng câu trả lời của bạn</b>
                  {!flagged.length ? (
                    <p className="tn-sub" style={{ margin: 0 }}>
                      Bạn đánh dấu con đạt toàn bộ các mục trong bài này. Không có câu nào cần theo dõi thêm — bạn cứ tiếp tục như đang làm.
                    </p>
                  ) : (
                    <>
                      {renderFlagBlock(test.labMiss, miss)}
                      {renderFlagBlock(test.labHas, has)}
                      <p className="tn-sub" style={{ marginTop: "14px" }}><b style={{ color: "var(--o)" }}>●</b> rõ ràng <span style={{ display: "inline-block", width: 22 }} /> <b>○</b> lúc có lúc không</p>
                      <p className="tn-sub" style={{ marginTop: "6px" }}>Đây chính là những điều đáng nói nhất nếu bạn cho con đi khám. Bạn chụp lại màn hình này là đủ — không cần nhớ hay kể lại.</p>
                    </>
                  )}
                </div>

                <div className="tn-block">
                  <b className="bh">✅ Việc bạn làm được ngay tuần này</b>
                  <ol className="tn-do">
                    {actions.map((action, index) => <li key={index}><Html value={action} /></li>)}
                  </ol>
                </div>

                <div className="tn-block tn-next">
                  <b className="bh">Nếu bạn muốn đi tiếp</b>
                  <p className="nx">Bạn không cần làm gì thêm hôm nay. Những việc phía trên là đủ để bắt đầu. Ba lối dưới đây chỉ dành cho khi bạn thấy cần.</p>
                  <div className="btns">
                    {testKey === "cham-noi" ? <a className="btn s" href="#phu-huynh">Đọc kỹ hơn về chậm nói</a> : null}
                    <a className="btn s" href="#phu-huynh/kham">Xem quy trình khám diễn ra thế nào</a>
                    <a className="btn s" href="#lop-cha-me">Xem lớp cho cha mẹ</a>
                    <a className="btn s" href="https://zalo.me/0866620583" target="_blank" rel="noreferrer">Hỏi một câu qua Zalo</a>
                  </div>
                </div>

                <div className="tn-save">
                  <button type="button" className="btn s" onClick={() => window.print()}>🖨 Lưu hoặc in kết quả này</button>
                  <span className="muted">Kết quả chỉ nằm trên máy bạn. Chúng tôi không lưu và không cần bạn để lại số điện thoại.</span>
                </div>
              </div>
            ) : null}

            <p className="tn-disc">
              {test.note ? <><Html value={test.note} /><br /></> : null}
              Đây là công cụ định hướng cho cha mẹ, <b>không phải chẩn đoán y khoa</b>. Kết quả không thay thế cho một buổi lượng giá đầy đủ với chuyên viên. Nếu bạn lo lắng về con, hãy đặt lịch khám thay vì chờ đợi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  data: HomePageData;
  /** Giữ optional để App cũ vẫn truyền quickTestData mà không lỗi TypeScript. */
  quickTestData?: unknown;
}

export default function HomePage({ data }: Props) {
  return (
    <div className={"pg"}>
      <div className={"hero"}>
        <div className={"wrap"}>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>
                {data.texts.t001}
              </div>
              <h1>
                {data.texts.t002}
                <br />
                {data.texts.t003}
              </h1>
              <p className={"lead"}>
                {data.texts.t004}
                <b>
                  {data.texts.t005}
                </b>
                {data.texts.t006}
                <b>
                  {data.texts.t007}
                </b>
                {data.texts.t008}
              </p>
              <div className={"btns"} style={{ marginTop: "22px" }}>
                <a className={"btn p"} href={data.links.link001}>
                  {data.texts.t009}
                </a>
                <a className={"btn p"} href={data.links.link002} style={{ background: "var(--ink)" }}>
                  {data.texts.t010}
                </a>
                <a className={"btn s"} href={data.links.link003}>
                  {data.texts.t011}
                </a>
              </div>
              <div className={"stats"}>
                <div className={"stat"}>
                  <b>
                    {data.texts.t012}
                  </b>
                  <span>
                    {data.texts.t013}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t014}
                  </b>
                  <span>
                    {data.texts.t015}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t016}
                  </b>
                  <span>
                    {data.texts.t017}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t018}
                  </b>
                  <span>
                    {data.texts.t019}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img alt={data.alts.alt001} src={data.images.img001} style={{ borderRadius: "14px", boxShadow: "0 16px 44px rgba(36,28,22,.15)" }} />
              <p className={"muted center"} style={{ marginTop: "12px" }}>
                {data.texts.t020}
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeQuickTest />
      <section>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "30px" }}>
            <div className={"eyebrow"}>
              {data.texts.t021}
            </div>
            <h2>
              {data.texts.t022}
            </h2>
            <p className={"lead"}>
              {data.texts.t023}
            </p>
          </div>
          <div className={"doors"}>
            <a className={"door"} href={data.links.link004}>
              <div className={"ic"}>
                {data.texts.t024}
              </div>
              <h3>
                {data.texts.t025}
              </h3>
              <p>
                {data.texts.t026}
              </p>
              <ul>
                <li>
                  {data.texts.t027}
                </li>
                <li>
                  {data.texts.t028}
                </li>
                <li>
                  {data.texts.t029}
                </li>
                <li>
                  {data.texts.t030}
                </li>
              </ul>
              <div className={"go"}>
                {data.texts.t031}
              </div>
            </a>
            <a className={"door"} href={data.links.link005}>
              <div className={"ic"}>
                {data.texts.t032}
              </div>
              <h3>
                {data.texts.t033}
              </h3>
              <p>
                {data.texts.t034}
              </p>
              <ul>
                <li>
                  {data.texts.t035}
                </li>
                <li>
                  {data.texts.t036}
                </li>
                <li>
                  {data.texts.t037}
                </li>
                <li>
                  {data.texts.t038}
                </li>
              </ul>
              <div className={"go"}>
                {data.texts.t039}
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "6px" }}>
            <div className={"eyebrow"}>
              {data.texts.t040}
            </div>
            <h2>
              {data.texts.t041}
            </h2>
            <p className={"lead"}>
              {data.texts.t042}
            </p>
          </div>
          <div className={"thap"}>
            <div className={"tpanel"}>
              <div className={"h"} style={{ background: "var(--c-cm)" }}>
                {data.texts.t043}
              </div>
              <div className={"b"}>
                <a className={"it"} href={data.links.link006}>
                  <b>
                    {data.texts.t044}
                  </b>
                  <em>
                    {data.texts.t045}
                  </em>
                  <span className={"pr"}>
                    {data.texts.t046}
                  </span>
                </a>
                <a className={"it"} href={data.links.link007}>
                  <b>
                    {data.texts.t047}
                  </b>
                  <em>
                    {data.texts.t048}
                    <br />
                    {data.texts.t049}
                  </em>
                </a>
                <div className={"note"}>
                  {data.texts.t050}
                  <b>
                    {data.texts.t051}
                  </b>
                  {data.texts.t052}
                </div>
              </div>
            </div>
            <div className={"thap-mid"}>
              <div className={"trow"}>
                <a className={"tb p5"} href={data.links.link008}>
                  <span className={"n"}>
                    {data.texts.t053}
                  </span>
                  <b>
                    {data.texts.t054}
                  </b>
                  <span className={"d"}>
                    {data.texts.t055}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t056}
                    </span>
                    <span>
                      {data.texts.t057}
                    </span>
                    <span>
                      {data.texts.t058}
                    </span>
                    <span>
                      {data.texts.t059}
                    </span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t060}
                <b>
                  {data.texts.t061}
                </b>
                {data.texts.t062}
                <b>
                  {data.texts.t063}
                </b>
              </div>
              <div className={"trow"}>
                <a className={"tb p4a"} href={data.links.link009}>
                  <span className={"n"}>
                    {data.texts.t064}
                  </span>
                  <b>
                    {data.texts.t065}
                  </b>
                  <span className={"d"}>
                    {data.texts.t066}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t067}
                    </span>
                    <span>
                      {data.texts.t068}
                    </span>
                    <span>
                      {data.texts.t069}
                    </span>
                  </span>
                </a>
                <a className={"tb p4b"} href={data.links.link010}>
                  <span className={"n"}>
                    {data.texts.t070}
                  </span>
                  <b>
                    {data.texts.t071}
                  </b>
                  <span className={"d"}>
                    {data.texts.t072}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t073}
                    </span>
                    <span>
                      {data.texts.t074}
                    </span>
                    <span>
                      {data.texts.t075}
                    </span>
                    <span>
                      {data.texts.t076}
                    </span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t077}
                <b>
                  {data.texts.t078}
                </b>
              </div>
              <div className={"trow"}>
                <a className={"tb p3"} href={data.links.link011}>
                  <span className={"n"}>
                    {data.texts.t079}
                  </span>
                  <b>
                    {data.texts.t080}
                  </b>
                  <span className={"d"}>
                    {data.texts.t081}
                  </span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p2"} href={data.links.link012}>
                  <span className={"n"}>
                    {data.texts.t082}
                  </span>
                  <b>
                    {data.texts.t083}
                  </b>
                  <span className={"d"}>
                    {data.texts.t084}
                  </span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p1"} href={data.links.link013}>
                  <span className={"n"}>
                    {data.texts.t085}
                  </span>
                  <b>
                    {data.texts.t086}
                  </b>
                  <span className={"d"}>
                    {data.texts.t087}
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className={"tpanel"}>
                <div className={"h"} style={{ background: "var(--ink)" }}>
                  {data.texts.t088}
                </div>
                <div className={"b"}>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t089}
                    </div>
                    <b>
                      {data.texts.t090}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t091}
                    </div>
                    <b>
                      {data.texts.t092}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t093}
                    </div>
                    <b>
                      {data.texts.t094}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t095}
                    </div>
                    <b>
                      {data.texts.t096}
                    </b>
                  </div>
                  <div className={"bdg gold"}>
                    <div className={"t"}>
                      {data.texts.t097}
                    </div>
                    <b>
                      {data.texts.t098}
                    </b>
                  </div>
                </div>
              </div>
              <div className={"tpanel"} style={{ marginTop: "13px" }}>
                <div className={"h"} style={{ background: "var(--o)" }}>
                  {data.texts.t099}
                </div>
                <div className={"b"}>
                  <div className={"note"} style={{ border: "none", paddingTop: "0" }}>
                    {data.texts.t100}
                  </div>
                  <a className={"btn s"} href={data.links.link014} style={{ marginTop: "10px", width: "100%", justifyContent: "center", fontSize: "13.5px" }}>
                    {data.texts.t101}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"grid-photo"} style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "34px", alignItems: "center", marginBottom: "34px" }}>
            <div>
              <img alt={data.alts.alt002} className={"photo"} src={data.images.img002} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
              <p className={"photo-cap"}>
                {data.texts.t102}
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: "10px" }}>
                {data.texts.t103}
              </h2>
              <p className={"lead"}>
                {data.texts.t104}
              </p>
            </div>
          </div>
          <div className={"grid3"}>
            <div className={"card"}>
              <h3>
                {data.texts.t105}
              </h3>
              <p>
                {data.texts.t106}
              </p>
              <a className={"btn s"} href={data.links.link015} style={{ marginTop: "6px" }}>
                {data.texts.t107}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t108}
              </h3>
              <p>
                {data.texts.t109}
              </p>
              <a className={"btn s"} href={data.links.link016} style={{ marginTop: "6px" }}>
                {data.texts.t110}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t111}
              </h3>
              <p>
                {data.texts.t112}
              </p>
              <a className={"btn s"} href={data.links.link017} style={{ marginTop: "6px" }}>
                {data.texts.t113}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"author"}>
            <img alt={data.alts.alt003} className={"av-img"} src={data.images.img003} />
            <div>
              <div className={"eyebrow"}>
                {data.texts.t114}
              </div>
              <h2 style={{ marginBottom: "12px" }}>
                {data.texts.t115}
              </h2>
              <p>
                {data.texts.t116}
                <b>
                  {data.texts.t117}
                </b>
                {data.texts.t118}
              </p>
              <ul className={"check"} style={{ marginTop: "14px" }}>
                <li>
                  {data.texts.t119}
                  <b>
                    {data.texts.t120}
                  </b>
                </li>
                <li>
                  <b>
                    {data.texts.t121}
                  </b>
                  {data.texts.t122}
                  <b>
                    {data.texts.t123}
                  </b>
                  {data.texts.t124}
                  <b>
                    {data.texts.t125}
                  </b>
                  {data.texts.t126}
                </li>
                <li>
                  {data.texts.t127}
                  <b>
                    {data.texts.t128}
                  </b>
                  {data.texts.t129}
                </li>
                <li>
                  {data.texts.t130}
                  <b>
                    {data.texts.t131}
                  </b>
                  {data.texts.t132}
                  <b>
                    {data.texts.t133}
                  </b>
                  {data.texts.t134}
                  <b>
                    {data.texts.t135}
                  </b>
                  {data.texts.t136}
                </li>
                <li>
                  {data.texts.t137}
                  <b>
                    {data.texts.t138}
                  </b>
                  {data.texts.t139}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>
              {data.texts.t140}
            </h2>
            <p>
              {data.texts.t141}
            </p>
            <div className={"btns"}>
              <a className={"btn g"} href={data.links.link018} target="_blank" rel="noreferrer">
                {data.texts.t142}
              </a>
              <a className={"btn s"} href={data.links.link019}>
                {data.texts.t143}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
