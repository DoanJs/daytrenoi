import { useMemo, useState } from "react";

import type {
  AddKnowledgeInput,
  KnowledgeModel,
} from "../../types/admin.types";

import KnowledgeAdminModal from "../../components/KnowledgeAdminModal/KnowledgeAdminModal";

import LoadingOverlay from "../../../../components/LoadingOverlay/LoadingOverlay";
import AdminConfirmModal from "../../components/AdminConfirmModal/AdminConfirmModal";

import { uploadImage } from "../../utils/uploadImg";

interface Props {
  knowledges: KnowledgeModel[];

  onAdd: (data: AddKnowledgeInput) => Promise<void>;

  onUpdate: (
    id: string,
    data: AddKnowledgeInput,
  ) => Promise<void>;

  onDelete: (id: string) => Promise<void>;
}

export default function AdminKnowledge({
  knowledges,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const [search, setSearch] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [editing, setEditing] =
    useState<KnowledgeModel | null>(null);

  const [formOpen, setFormOpen] =
    useState(false);

  const [deleteTarget, setDeleteTarget] =
    useState<KnowledgeModel | null>(null);

  /* =====================================================
   * FILTER
   * ===================================================== */

  const filtered = useMemo(() => {
    const keyword = search
      .trim()
      .toLowerCase();

    if (!keyword) {
      return knowledges;
    }

    return knowledges.filter(
      (knowledge) =>
        [
          knowledge.title,
          knowledge.slug,
          knowledge.category,
          knowledge.excerpt,
          knowledge.author,
        ]
          .join(" ")
          .toLowerCase()
          .includes(keyword),
    );
  }, [knowledges, search]);

  /* =====================================================
   * SAVE
   * ===================================================== */

  const handleSave = async (
    data: AddKnowledgeInput,
    knowledgeImgFile: File | null,
  ) => {
    let coverUrl = data.coverUrl;

    try {
      setIsLoading(true);

      /*
       * Nếu người dùng chọn ảnh mới
       * thì upload lên Cloudinary.
       */
      if (knowledgeImgFile) {
        const resultImg =
          await uploadImage(
            knowledgeImgFile,
            "knowledge",
          );

        coverUrl = resultImg.url;
      }

      const payload: AddKnowledgeInput = {
        ...data,

        coverUrl,
      };

      if (editing) {
        await onUpdate(
          editing.id,
          payload,
        );
      } else {
        await onAdd(payload);
      }

      setFormOpen(false);

      setEditing(null);
    } catch (error) {
      console.error(
        "handleSave knowledge error:",
        error,
      );
    } finally {
      setIsLoading(false);
    }
  };

  /* =====================================================
   * UI
   * ===================================================== */

  return (
    <>
      {/* HEADER */}

      <div className="admin-page-header">
        <div>
          <div className="eyebrow">
            Knowledge
          </div>

          <h1>
            Kiến thức khoa học
          </h1>

          <p>
            Quản lý bài viết kiến thức
            khoa học hiển thị trên
            website.
          </p>
        </div>

        <button
          type="button"
          className="admin-btn primary"
          onClick={() => {
            setEditing(null);

            setFormOpen(true);
          }}
        >
          + Thêm bài viết
        </button>
      </div>

      {/* TOOLBAR */}

      <div className="admin-toolbar">
        <input
          className="admin-search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Tìm tiêu đề, danh mục, tác giả..."
        />

        <select
          className="admin-filter"
          value=""
          onChange={() => {}}
        >
          <option value="">
            {knowledges.length} bài viết
          </option>
        </select>
      </div>

      {/* LIST */}

      <div className="admin-course-list">
        {filtered.map(
          (knowledge) => (
            <div
              className="admin-course-row"
              key={knowledge.id}
            >
              {/* IMAGE + ORDER */}

              <div className="admin-course-code">
                <span>
                  #
                  {knowledge.sortOrder ??
                    0}
                </span>

                <img
                  alt={
                    knowledge.title
                  }
                  src={
                    knowledge.coverUrl ||
                    "/images/speech-therapy-owl-d5c2c84c.png"
                  }
                />
              </div>

              {/* MAIN CONTENT */}

              <div className="admin-course-main">
                <b>
                  {knowledge.title ||
                    "Chưa có tiêu đề"}
                </b>

                <span>
                  {knowledge.category ||
                    "Kiến thức khoa học"}
                </span>

                {knowledge.excerpt ? (
                  <span
                    style={{
                      display:
                        "-webkit-box",

                      WebkitLineClamp: 2,

                      WebkitBoxOrient:
                        "vertical",

                      overflow:
                        "hidden",
                    }}
                  >
                    {
                      knowledge.excerpt
                    }
                  </span>
                ) : (
                  <span>
                    Chưa có mô tả ngắn
                  </span>
                )}
              </div>

              {/* ARTICLE INFO */}

              <div className="admin-course-price">
                <b
                  style={{
                    fontSize: 13,
                  }}
                >
                  {knowledge.author ||
                    "Chưa có tác giả"}
                </b>

                <small
                  title={
                    knowledge.slug
                  }
                  style={{
                    display: "block",

                    maxWidth: 220,

                    overflow:
                      "hidden",

                    textOverflow:
                      "ellipsis",

                    whiteSpace:
                      "nowrap",
                  }}
                >
                  /
                  {knowledge.slug ||
                    "chua-co-slug"}
                </small>

                <small>
                  👁{" "}
                  {knowledge.views ?? 0}{" "}
                  lượt xem
                </small>
              </div>

              {/* STATUS + ACTION */}

              <div>
                <span
                  className={`admin-badge ${
                    knowledge.isActive
                      ? "active"
                      : ""
                  }`}
                >
                  {knowledge.isActive
                    ? "Đang hiển thị"
                    : "Đã ẩn"}
                </span>

                <br />

                <button
                  type="button"
                  className="admin-action-link"
                  onClick={() => {
                    setEditing(
                      knowledge,
                    );

                    setFormOpen(true);
                  }}
                >
                  Sửa
                </button>

                {" · "}

                <button
                  type="button"
                  className="admin-action-link danger"
                  onClick={() =>
                    setDeleteTarget(
                      knowledge,
                    )
                  }
                >
                  Xóa
                </button>
              </div>
            </div>
          ),
        )}

        {/* EMPTY */}

        {filtered.length === 0 ? (
          <div
            style={{
              padding:
                "40px 20px",

              textAlign:
                "center",

              color:
                "#8b9690",
            }}
          >
            Không tìm thấy bài viết
            phù hợp.
          </div>
        ) : null}
      </div>

      {/* CREATE / EDIT MODAL */}

      <KnowledgeAdminModal
        open={formOpen}
        knowledge={editing}
        onClose={() => {
          setFormOpen(false);

          setEditing(null);
        }}
        onSave={handleSave}
      />

      {/* DELETE CONFIRM */}

      <AdminConfirmModal
        open={Boolean(
          deleteTarget,
        )}
        title="Xóa bài viết?"
        description={`Bạn có chắc muốn xóa "${
          deleteTarget?.title || ""
        }"?`}
        onClose={() =>
          setDeleteTarget(null)
        }
        onConfirm={async () => {
          if (!deleteTarget) {
            return;
          }

          try {
            setIsLoading(true);

            await onDelete(
              deleteTarget.id,
            );

            setDeleteTarget(null);
          } catch (error) {
            console.error(
              "delete knowledge error:",
              error,
            );
          } finally {
            setIsLoading(false);
          }
        }}
      />

      {/* LOADING */}

      <LoadingOverlay
        show={isLoading}
      />
    </>
  );
}