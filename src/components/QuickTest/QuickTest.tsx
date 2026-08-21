import { useMemo, useRef, useState } from "react";
import "./QuickTest.css";
import { quickTestData as defaultQuickTestData } from "./QuickTest.data";
import {
  QuickTestData,
  QuickTestDefinition,
  QuickTestItem,
  QuickTestKey,
  QuickTestLevel,
} from "./QuickTest.types";

interface Props {
  /**
   * Có thể truyền data từ ngoài vào.
   * Nếu không truyền, component dùng QuickTest.data.ts.
   */
  data?: QuickTestData;
}

interface RenderItem extends QuickTestItem {
  key: string;
}

interface FlaggedItem {
  group?: string;
  text: string;
  high: boolean;
  kind: "miss" | "has";
}

export default function QuickTest({
  data = defaultQuickTestData,
}: Props) {
  const [testKey, setTestKey] = useState<QuickTestKey>("tu-ky");
  const [ageId, setAgeId] = useState("");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [resultLevel, setResultLevel] =
    useState<QuickTestLevel | null>(null);
  const [error, setError] = useState("");

  const resultRef = useRef<HTMLDivElement | null>(null);

  const test = data.tests[testKey];

  const renderItems = useMemo<RenderItem[]>(() => {
    if (test.ageGroups) {
      const ageGroup = test.ageGroups.find((item) => item.id === ageId);

      if (!ageGroup) return [];

      return ageGroup.items.map((text, index) => ({
        key: `age-${ageGroup.id}-${index}`,
        text,
        reverseScore: false,
      }));
    }

    if (test.groups) {
      return test.groups.flatMap((group, groupIndex) =>
        group.items.map((item, itemIndex) => ({
          ...item,
          group: group.name,
          key: `group-${groupIndex}-${itemIndex}`,
        }))
      );
    }

    return (test.items ?? []).map((item, index) => ({
      ...item,
      key: `item-${index}`,
    }));
  }, [test, ageId]);

  const answeredCount = Object.keys(answers).length;

  const calculateItemScore = (
    currentTest: QuickTestDefinition,
    item: RenderItem,
    answerIndex: number
  ) => {
    const scale = currentTest.scale;

    if (!item.reverseScore) {
      return scale[answerIndex]?.score ?? 0;
    }

    const reversedIndex = scale.length - 1 - answerIndex;

    return scale[reversedIndex]?.score ?? 0;
  };

  const score = useMemo(() => {
    return renderItems.reduce((total, item) => {
      const answer = answers[item.key];

      if (answer === undefined) return total;

      return total + calculateItemScore(test, item, answer);
    }, 0);
  }, [answers, renderItems, test]);

  const maxScore = renderItems.length * 2;

  const selectedBand = useMemo(() => {
    if (!resultLevel) return null;

    return (
      test.bands.find(
        (band) => score >= band.min && score <= band.max
      ) ?? test.bands[test.bands.length - 1]
    );
  }, [resultLevel, score, test]);

  const flaggedItems = useMemo<FlaggedItem[]>(() => {
    return renderItems.flatMap((item) => {
      const answerIndex = answers[item.key];

      if (answerIndex === undefined) return [];

      const itemScore = calculateItemScore(test, item, answerIndex);

      if (itemScore < 1) return [];

      const kind: "miss" | "has" = item.reverseScore
        ? "has"
        : test.pos0
          ? "miss"
          : "has";

      return [
        {
          group: item.group,
          text: item.text,
          high: itemScore >= 2,
          kind,
        },
      ];
    });
  }, [answers, renderItems, test]);

  const handleSelectTest = (key: QuickTestKey) => {
    setTestKey(key);
    setAgeId("");
    setAnswers({});
    setResultLevel(null);
    setError("");
  };

  const handleSelectAge = (id: string) => {
    setAgeId(id);
    setAnswers({});
    setResultLevel(null);
    setError("");
  };

  const handleAnswer = (itemKey: string, answerIndex: number) => {
    setAnswers((current) => ({
      ...current,
      [itemKey]: answerIndex,
    }));

    setResultLevel(null);
    setError("");
  };

  const handleReset = () => {
    setAnswers({});
    setResultLevel(null);
    setError("");
  };

  const handleShowResult = () => {
    if (test.ageGroups && !ageId) {
      setError("Bạn chọn nhóm tuổi của con trước nhé.");
      return;
    }

    if (answeredCount < renderItems.length) {
      setError(
        `Còn ${renderItems.length - answeredCount} câu chưa trả lời. Bạn trả lời hết để kết quả chính xác nhé.`
      );
      return;
    }

    const band =
      test.bands.find(
        (item) => score >= item.min && score <= item.max
      ) ?? test.bands[test.bands.length - 1];

    setResultLevel(band.level);
    setError("");

    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 30);
  };

  const renderFlagBlock = (
    title: string,
    items: FlaggedItem[]
  ) => {
    if (!items.length) return null;

    const groups = new Map<string, FlaggedItem[]>();

    items.forEach((item) => {
      const key = item.group || "";
      const current = groups.get(key) ?? [];
      current.push(item);
      groups.set(key, current);
    });

    return (
      <>
        <div className="tn-fg">
          {title} · {items.length} câu
        </div>

        {Array.from(groups.entries()).map(([group, groupItems]) => (
          <div key={group || "general"}>
            {group ? (
              <div className="tn-flag-group">{group}</div>
            ) : null}

            <ul className="tn-flags">
              {groupItems.map((item, index) => (
                <li
                  key={`${item.text}-${index}`}
                  className={item.high ? "hi" : "mid"}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };

  const missItems = flaggedItems.filter(
    (item) => item.kind === "miss"
  );

  const hasItems = flaggedItems.filter(
    (item) => item.kind === "has"
  );

  const markerPosition =
    maxScore > 0
      ? Math.min(score, maxScore) / maxScore * 100
      : 0;

  return (
    <section id="test-nhanh">
      <div className="wrap">
        <div className="center tn-heading">
          <div className="eyebrow">{data.eyebrow}</div>
          <h2>{data.title}</h2>
          <p className="lead">{data.description}</p>
        </div>

        <div className="tn-wrap">
          <div className="tn-tabs">
            {(Object.keys(data.tests) as QuickTestKey[]).map((key) => {
              const item = data.tests[key];

              return (
                <button
                  key={key}
                  type="button"
                  className={`tn-tab ${testKey === key ? "on" : ""}`}
                  onClick={() => handleSelectTest(key)}
                >
                  <span
                    className="i"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <b>{item.title}</b>
                  <span>{item.sub}</span>
                </button>
              );
            })}
          </div>

          <div className="tn-body">
            <p
              className="tn-intro"
              dangerouslySetInnerHTML={{ __html: test.intro }}
            />

            {test.ageGroups ? (
              <div className="tn-age">
                <span className="tn-age-label">
                  Con bạn mấy tuổi?
                </span>

                {test.ageGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    className={ageId === group.id ? "on" : ""}
                    onClick={() => handleSelectAge(group.id)}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            ) : null}

            {test.ageGroups && !ageId ? (
              <p className="muted tn-age-empty">
                Chọn nhóm tuổi của con để bắt đầu.
              </p>
            ) : (
              <div>
                {renderItems.map((item, index) => {
                  const previousGroup =
                    index > 0 ? renderItems[index - 1].group : undefined;

                  const showGroup =
                    item.group && item.group !== previousGroup;

                  return (
                    <div key={item.key}>
                      {showGroup ? (
                        <div className="tn-gh">{item.group}</div>
                      ) : null}

                      <div className="tn-q">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        />

                        <div className="tn-opts">
                          {test.scale.map((option, answerIndex) => (
                            <label
                              key={`${item.key}-${answerIndex}`}
                              className={
                                answers[item.key] === answerIndex
                                  ? "checked"
                                  : ""
                              }
                            >
                              <input
                                type="radio"
                                name={item.key}
                                value={answerIndex}
                                checked={
                                  answers[item.key] === answerIndex
                                }
                                onChange={() =>
                                  handleAnswer(item.key, answerIndex)
                                }
                              />

                              <span>{option.label}</span>
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
              <button
                type="button"
                className="btn p"
                onClick={handleShowResult}
              >
                Xem kết quả
              </button>

              <button
                type="button"
                className="btn s"
                onClick={handleReset}
              >
                Làm lại
              </button>

              <span className="tn-prog">
                {renderItems.length
                  ? `Đã trả lời ${answeredCount}/${renderItems.length} câu`
                  : ""}
              </span>
            </div>

            {error ? (
              <div className="tn-error">{error}</div>
            ) : null}

            {selectedBand && resultLevel ? (
              <div
                ref={resultRef}
                className={`tn-res on ${resultLevel}`}
              >
                <div className="tn-top">
                  <div className="tn-num">
                    <b>{score}</b>
                    <span>trên {maxScore} điểm</span>
                  </div>

                  <div className="tn-meta">
                    <div className="lv">
                      Kết quả · {test.title}
                    </div>
                    <h4>{selectedBand.title}</h4>
                  </div>
                </div>

                <div className="tn-bar">
                  {test.bands.map((band, index) => {
                    const width =
                      ((band.max - band.min + 1) /
                        (maxScore + 1)) *
                      100;

                    return (
                      <i
                        key={`${band.level}-${index}`}
                        className={`z${index + 1}`}
                        style={{ flex: `0 0 ${width}%` }}
                      />
                    );
                  })}

                  <i
                    className="dot"
                    style={{
                      position: "absolute",
                      top: "-3px",
                      bottom: "-3px",
                      left: `calc(${markerPosition}% - 1.5px)`,
                      borderRadius: "2px",
                    }}
                  />
                </div>

                <p
                  dangerouslySetInnerHTML={{
                    __html: selectedBand.description,
                  }}
                />

                <div className="tn-block">
                  <b className="bh">
                    📝 Phân tích từng câu trả lời của bạn
                  </b>

                  {!flaggedItems.length ? (
                    <p className="tn-sub tn-no-flags">
                      Bạn đánh dấu con đạt toàn bộ các mục trong bài
                      này. Không có câu nào cần theo dõi thêm — bạn cứ
                      tiếp tục như đang làm.
                    </p>
                  ) : (
                    <>
                      {renderFlagBlock(test.labMiss, missItems)}
                      {renderFlagBlock(test.labHas, hasItems)}

                      <p className="tn-sub tn-legend">
                        <b className="tn-dot-high">●</b> rõ ràng
                        <span />
                        <b>○</b> lúc có lúc không
                      </p>

                      <p className="tn-sub">
                        Đây chính là những điều đáng nói nhất nếu bạn
                        cho con đi khám. Bạn chụp lại màn hình này là đủ
                        — không cần nhớ hay kể lại.
                      </p>
                    </>
                  )}
                </div>

                <div className="tn-block">
                  <b className="bh">
                    ✅ Việc bạn làm được ngay tuần này
                  </b>

                  <ol className="tn-do">
                    {(test.actions[selectedBand.level] ?? []).map(
                      (action, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: action }}
                        />
                      )
                    )}
                  </ol>
                </div>

                <div className="tn-block tn-next">
                  <b className="bh">Nếu bạn muốn đi tiếp</b>

                  <p className="nx">
                    Bạn không cần làm gì thêm hôm nay. Những việc phía
                    trên là đủ để bắt đầu. Ba lối dưới đây chỉ dành cho
                    khi bạn thấy cần.
                  </p>

                  <div className="btns">
                    {data.nextLinks
                      .filter(
                        (link) =>
                          !link.onlyFor || link.onlyFor === testKey
                      )
                      .map((link) => (
                        <a
                          key={link.label}
                          className="btn s"
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>

                <div className="tn-save">
                  <button
                    type="button"
                    className="btn s"
                    onClick={() => window.print()}
                  >
                    🖨 Lưu hoặc in kết quả này
                  </button>

                  <span className="muted">
                    Kết quả chỉ nằm trên máy bạn. Chúng tôi không lưu và
                    không cần bạn để lại số điện thoại.
                  </span>
                </div>
              </div>
            ) : null}

            <p className="tn-disc">
              {test.note ? (
                <>
                  <span
                    dangerouslySetInnerHTML={{ __html: test.note }}
                  />
                  <br />
                </>
              ) : null}

              <span
                dangerouslySetInnerHTML={{
                  __html: data.disclaimer,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
