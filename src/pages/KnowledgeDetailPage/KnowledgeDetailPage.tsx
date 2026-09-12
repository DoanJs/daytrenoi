import { useEffect, useMemo, useState } from "react";
import { KnowledgeModel } from "../KnowledgePage/KnowledgeModel.snippet";
import "./KnowledgeDetailPage.css";
import {
  getKnowledgeBySlug,
  getRelatedKnowledgeArticles,
} from "./knowledgeService";
import { increaseKnowledgeViews } from "../KnowledgePage/knowledgeService";

interface Props {
  slug: string;
}

function formatDate(value: any) {
  if (!value) return "";

  try {
    const date =
      typeof value?.toDate === "function"
        ? value.toDate()
        : value instanceof Date
          ? value
          : new Date(value);

    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  } catch {
    return "";
  }
}

export default function KnowledgeDetailPage({ slug }: Props) {
  const [article, setArticle] = useState<KnowledgeModel | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<KnowledgeModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadArticle = async () => {
      try {
        setIsLoading(true);
        setNotFound(false);

        const data = await getKnowledgeBySlug(slug);

        if (!mounted) return;

        if (!data) {
          setArticle(null);
          setRelatedArticles([]);
          setNotFound(true);
          return;
        }

        /* ============================
       TĂNG VIEW
    ============================ */

        try {
          await increaseKnowledgeViews(data.id);

          if (mounted) {
            setArticle({
              ...data,
              views: (data.views ?? 0) + 1,
            });
          }
        } catch (error) {
          /*
           * Nếu update view lỗi
           * vẫn cho user đọc bài.
           */
          console.error("increaseKnowledgeViews error:", error);

          if (mounted) {
            setArticle(data);
          }
        }

        const related = await getRelatedKnowledgeArticles({
          category: data.category,
          excludeId: data.id,
          limitCount: 4,
        });

        if (mounted) {
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error("getKnowledgeBySlug error:", error);

        if (mounted) {
          setArticle(null);
          setRelatedArticles([]);
          setNotFound(true);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadArticle();

    return () => {
      mounted = false;
    };
  }, [slug]);

  const publishedDate = useMemo(
    () => formatDate(article?.createAt),
    [article?.createAt],
  );

  if (isLoading) {
    return (
      <div className="pg knowledge-detail-page">
        <section className="tight">
          <div className="wrap">
            <p className="muted">Đang tải bài viết...</p>
          </div>
        </section>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="pg knowledge-detail-page">
        <section className="tight">
          <div className="wrap">
            <div className="knowledge-detail-empty">
              <h1>Không tìm thấy bài viết</h1>

              <p>Bài viết có thể đã bị ẩn hoặc đường dẫn không còn tồn tại.</p>

              <a className="btn p" href="#kien-thuc-khoa-hoc">
                Quay lại Kiến thức khoa học
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pg knowledge-detail-page">
      <section className="knowledge-detail-section">
        <div className="knowledge-detail-wrap">
          <div className="knowledge-detail-breadcrumb">
            <a href="#/">Trang chủ</a>

            <span>/</span>

            <a href="#kien-thuc-khoa-hoc">Kiến thức khoa học</a>

            {article.category ? (
              <>
                <span>/</span>
                <span>{article.category}</span>
              </>
            ) : null}
          </div>

          <article className="knowledge-article">
            <header className="knowledge-article-header">
              <div className="knowledge-article-eyebrow">
                {article.category || "Kiến thức khoa học"}
              </div>

              <h1>{article.title}</h1>

              <div className="knowledge-article-meta">
                {article.author ? (
                  <span>
                    Tác giả: <b>{article.author}</b>
                  </span>
                ) : null}

                {publishedDate ? (
                  <>
                    <span className="knowledge-meta-separator">|</span>

                    <span>
                      Ngày đăng: <b>{publishedDate}</b>
                    </span>
                  </>
                ) : null}

                <span className="knowledge-meta-separator">|</span>

                <span>
                  Lượt xem: <b>{article.views ?? 0}</b>
                </span>
              </div>

              {article.excerpt ? (
                <p className="knowledge-article-excerpt">{article.excerpt}</p>
              ) : null}
            </header>

            {article.coverUrl ? (
              <div className="knowledge-article-cover">
                <img src={article.coverUrl} alt={article.title} />
              </div>
            ) : null}

            <div
              className="knowledge-article-content"
              dangerouslySetInnerHTML={{
                __html: article.content || "",
              }}
            />
          </article>

          {relatedArticles.length > 0 ? (
            <section className="knowledge-related-section">
              <div className="knowledge-related-heading">
                <div>
                  <div className="eyebrow">Có thể bạn quan tâm</div>
                  <h2>Bài viết cùng danh mục</h2>
                </div>

                <a href="#kien-thuc-khoa-hoc">Xem tất cả →</a>
              </div>

              <div className="knowledge-related-grid">
                {relatedArticles.map((item) => (
                  <a
                    key={item.id}
                    className="knowledge-related-card"
                    href={`#kien-thuc-khoa-hoc/${item.slug}`}
                  >
                    <div className="knowledge-related-cover">
                      {item.coverUrl ? (
                        <img src={item.coverUrl} alt={item.title} />
                      ) : (
                        <div className="knowledge-related-placeholder">📚</div>
                      )}
                    </div>

                    <div className="knowledge-related-body">
                      <span className="tagline">
                        {item.category || "Kiến thức khoa học"}
                      </span>

                      <h3>{item.title}</h3>

                      {item.excerpt ? <p>{item.excerpt}</p> : null}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
}
