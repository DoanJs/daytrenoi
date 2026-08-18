import { useMemo, useRef, useState } from "react";
import "./QuickTest.css";
import { QuickTestData, QuickTestDefinition } from "./QuickTest.types";

interface QuickTestProps {
  data: QuickTestData;
}

interface FlatQuestion {
  key: number;
  text: string;
  reverse: number;
  group?: string;
}

const renderRichText = (value?: string) => {
  if (!value) return null;
  const parts = value.split(/(<b>.*?<\/b>|<br\s*\/?>)/gi).filter(Boolean);
  return parts.map((part, index) => {
    const bold = part.match(/^<b>(.*?)<\/b>$/i);
    if (bold) return <b key={index}>{bold[1]}</b>;
    if (/^<br\s*\/?>$/i.test(part)) return <br key={index} />;
    return <span key={index}>{part}</span>;
  });
};

export default function QuickTest({ data }: QuickTestProps) {
  const [testId, setTestId] = useState(data.tests[0]?.id ?? "");
  const [ageId, setAgeId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ score: number; band: QuickTestDefinition["bands"][number] } | null>(null);
  const [name, setName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const resultRef = useRef<HTMLDivElement | null>(null);

  const current = useMemo(
    () => data.tests.find((item) => item.id === testId) ?? data.tests[0],
    [data.tests, testId]
  );

  const questions = useMemo<FlatQuestion[]>(() => {
    if (!current) return [];

    if (current.ageGroups) {
      const group = current.ageGroups.find((item) => item.id === ageId);
      return (group?.questions ?? []).map((text, index) => ({
        key: index,
        text,
        reverse: 0,
      }));
    }

    if (current.groups) {
      let index = 0;
      return current.groups.flatMap((group) =>
        group.questions.map((text) => ({
          key: index++,
          text,
          reverse: 0,
          group: group.title,
        }))
      );
    }

    return (current.items ?? []).map(([text, reverse], index) => ({
      key: index,
      text,
      reverse,
    }));
  }, [current, ageId]);

  const resetAnswers = () => {
    setAnswers({});
    setResult(null);
    setMessage("");
  };

  const selectTest = (id: string) => {
    setTestId(id);
    setAgeId(null);
    resetAnswers();
  };

  const score = useMemo(() => {
    if (!current) return 0;
    return questions.reduce((total, question) => {
      const answerIndex = answers[question.key];
      if (answerIndex === undefined) return total;
      const scaleIndex =
        question.reverse === 1
          ? current.scale.length - 1 - answerIndex
          : answerIndex;
      return total + current.scale[scaleIndex][1];
    }, 0);
  }, [answers, current, questions]);

  const handleResult = () => {
    if (!current) return;

    if (current.ageGroups && !ageId) {
      window.alert("Bạn chọn nhóm tuổi của con trước nhé.");
      return;
    }

    const done = Object.keys(answers).length;
    if (done < questions.length) {
      window.alert(`Còn ${questions.length - done} câu chưa trả lời. Bạn trả lời hết để kết quả chính xác nhé.`);
      return;
    }

    const band =
      current.bands.find((item) => score >= item.min && score <= item.max) ??
      current.bands[current.bands.length - 1];

    setResult({ score, band });
    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 30);
  };

  const handleSend = () => {
    if (!current) return;

    if (!name.trim() || !phone.trim()) {
      setMessage("Bạn điền giúp tên và số Zalo nhé.");
      return;
    }

    const text =
      `Xin chào, tôi vừa làm bài test "${current.title}" trên web. ` +
      `Tên tôi: ${name.trim()}. Tuổi con: ${childAge.trim()}. Điểm: ${score}. ` +
      "Tôi muốn nhận bản phân tích chi tiết.";

    window.open(`${data.zaloBaseUrl}?text=${encodeURIComponent(text)}`, "_blank");
    setMessage("Đã mở Zalo — bạn gửi tin nhắn để chúng tôi gửi lại bản phân tích nhé.");
  };

  if (!current) return null;

  let lastGroup = "";

  return (
    <section id="test-nhanh">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 26 }}>
          <div className="eyebrow">{data.eyebrow}</div>
          <h2>{data.heading}</h2>
          <p className="lead">{data.description}</p>
        </div>

        <div className="tn-wrap">
          <div className="tn-tabs" id="tnTabs">
            {data.tests.map((test) => (
              <button
                key={test.id}
                className={`tn-tab ${test.id === testId ? "on" : ""}`}
                type="button"
                onClick={() => selectTest(test.id)}
              >
                <span className="i">{test.icon}</span>
                <b>{test.title}</b>
                <span>{test.sub}</span>
              </button>
            ))}
          </div>

          <div className="tn-body">
            <p className="tn-intro">{renderRichText(current.intro)}</p>

            {current.ageGroups ? (
              <div className="tn-age">
                <span style={{ fontSize: 13.5, color: "var(--ink3)", alignSelf: "center", marginRight: 4 }}>
                  Con bạn mấy tuổi?
                </span>
                {current.ageGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    className={ageId === group.id ? "on" : undefined}
                    onClick={() => {
                      setAgeId(group.id);
                      resetAnswers();
                    }}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            ) : null}

            {current.ageGroups && !ageId ? (
              <p className="muted" style={{ padding: "18px 0" }}>
                Chọn nhóm tuổi của con để bắt đầu.
              </p>
            ) : (
              <div>
                {questions.map((question) => {
                  const showGroup = Boolean(question.group && question.group !== lastGroup);
                  if (question.group) lastGroup = question.group;
                  return (
                    <div key={question.key}>
                      {showGroup ? <div className="tn-gh">{question.group}</div> : null}
                      <div className="tn-q">
                        <p>{renderRichText(question.text)}</p>
                        <div className="tn-opts">
                          {current.scale.map(([label], optionIndex) => (
                            <label key={`${question.key}-${optionIndex}`}>
                              <input
                                type="radio"
                                name={`q${question.key}`}
                                checked={answers[question.key] === optionIndex}
                                onChange={() =>
                                  setAnswers((prev) => ({
                                    ...prev,
                                    [question.key]: optionIndex,
                                  }))
                                }
                              />
                              <span>{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="tn-foot">
              <button className="btn p" type="button" onClick={handleResult}>
                Xem kết quả
              </button>
              <button className="btn s" type="button" onClick={resetAnswers}>
                Làm lại
              </button>
              <span className="tn-prog">
                {questions.length ? `Đã trả lời ${Object.keys(answers).length}/${questions.length} câu` : ""}
              </span>
            </div>

            <div
              ref={resultRef}
              className={`tn-res ${result ? `on ${result.band.level}` : ""}`}
            >
              {result ? (
                <>
                  <div className="lv">Kết quả · {result.score} điểm</div>
                  <h4>{result.band.title}</h4>
                  <p>{renderRichText(result.band.description)}</p>

                  <div className="btns" style={{ marginBottom: 14 }}>
                    <a className="btn p" href={data.resultPrimaryUrl} target="_blank" rel="noreferrer">
                      {data.resultPrimaryLabel}
                    </a>
                    <a className="btn s" href={data.resultSecondaryUrl}>
                      {data.resultSecondaryLabel}
                    </a>
                  </div>

                  <div className="tn-lead">
                    <b>{data.leadTitle}</b>
                    <p>{data.leadDescription}</p>
                    <div className="row">
                      <input value={name} onChange={(e) => setName(e.target.value)} placeholder={data.namePlaceholder} />
                      <input value={childAge} onChange={(e) => setChildAge(e.target.value)} placeholder={data.agePlaceholder} />
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={data.phonePlaceholder} />
                      <button className="btn g" type="button" onClick={handleSend}>
                        {data.submitLabel}
                      </button>
                    </div>
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: message.startsWith("Đã") ? "#2E7D5B" : "#B1442C",
                      }}
                    >
                      {message}
                    </p>
                  </div>
                </>
              ) : null}
            </div>

            <p className="tn-disc">
              {current.note ? (
                <>
                  {renderRichText(current.note)}
                  <br />
                </>
              ) : null}
              {renderRichText(data.disclaimer)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
