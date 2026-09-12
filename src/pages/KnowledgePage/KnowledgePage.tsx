import { useEffect, useState } from "react";
import "./KnowledgePage.css";
import { KnowledgeModel } from "./KnowledgeModel.snippet";
import { KnowledgePageData } from "./KnowledgePage.types";
import { getKnowledgeArticles } from "./knowledgeService";


interface Props {
  data: KnowledgePageData;
}

export default function KnowledgePage({ data }: Props) {
  const [articles, setArticles] = useState<KnowledgeModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        setIsLoading(true);

        const data = await getKnowledgeArticles();

        setArticles(data);
      } catch (error) {
        console.error("getKnowledgeArticles error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadKnowledge();
  }, []);

  return (
    <div className="pg">
      <div className="hero" style={{ padding: "48px 0 34px" }}>
        <div className="wrap">
          <div className="eyebrow">{data.texts.t001}</div>

          <h1 style={{ maxWidth: "18ch" }}>
            {data.texts.t002}
          </h1>

          <p className="lead">
            {data.texts.t003}
          </p>
        </div>
      </div>

      <section className="tight">
        <div className="wrap">
          {isLoading ? (
            <p className="muted">Đang tải bài viết...</p>
          ) : articles.length === 0 ? (
            <p className="muted">Chưa có bài viết nào.</p>
          ) : (
            <div className="knowledge-list">
              {articles.map((article) => (
                <a
                  className="knowledge-card"
                  key={article.id}
                  href={`#kien-thuc-khoa-hoc/${article.slug}`}
                >
                  <div className="ph">
                    {article.coverUrl ? (
                      <img
                        src={
                          article.coverUrl ||
                          "/images/speech-therapy-owl-d5c2c84c.png"
                        }
                        alt={article.title}
                      />
                    ) : (
                      <div style={{ fontSize: "48px" }}>📚</div>
                    )}
                  </div>

                  <div className="bd">
                    <span className="tagline">
                      {article.category || "Kiến thức khoa học"}
                    </span>

                    <h3>{article.title}</h3>

                    {article.excerpt ? (
                      <p>{article.excerpt}</p>
                    ) : null}

                    <div className="knowledge-meta">
                      {article.author ? (
                        <span>
                          <b>Tác giả:</b> {article.author}
                        </span>
                      ) : null}

                      <span>
                        <b>Lượt xem:</b> {article.views ?? 0}
                      </span>
                    </div>

                    <div className="knowledge-actions">
                      <span className="btn p">
                        Xem bài viết
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          <p className="muted" style={{ marginTop: "20px" }}>
            {data.texts.t004}
          </p>
        </div>
      </section>
    </div>
  );
}
