import { useEffect, useRef, useState } from "react";

import "./KnowledgeAdminModal.css";

import type {
  AddKnowledgeInput,
  KnowledgeModel,
} from "../../types/admin.types";

interface Props {
  open: boolean;

  knowledge?: KnowledgeModel | null;

  onClose: () => void;

  onSave: (
    data: AddKnowledgeInput,
    knowledgeImgFile: File | null,
  ) => Promise<void>;
}

/* =====================================================
 * HELPERS
 * ===================================================== */

const createSlug = (value: string) => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const emptyForm: AddKnowledgeInput = {
  title: "",

  slug: "",

  category: "",

  excerpt: "",

  coverUrl: "",

  content: "",

  author: "Oanh Nguyễn",

  views: 0,

  isActive: true,

  sortOrder: 1,
};

/* =====================================================
 * COMPONENT
 * ===================================================== */

export default function KnowledgeAdminModal({
  open,
  knowledge,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<AddKnowledgeInput>(emptyForm);

  const [knowledgeImgFile, setKnowledgeImgFile] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState("");

  const [slugEdited, setSlugEdited] = useState(false);

  const editorRef = useRef<HTMLDivElement | null>(null);

  /* =====================================================
   * LOAD FORM
   * ===================================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    if (knowledge) {
      setForm({
        title: knowledge.title || "",

        slug: knowledge.slug || "",

        category: knowledge.category || "",

        excerpt: knowledge.excerpt || "",

        coverUrl: knowledge.coverUrl || "",

        content: knowledge.content || "",

        author: knowledge.author || "Oanh Nguyễn",

        views: knowledge.views ?? 0,

        isActive: knowledge.isActive ?? true,

        sortOrder: knowledge.sortOrder ?? 1,
      });

      setPreviewUrl(knowledge.coverUrl || "");

      setSlugEdited(true);
    } else {
      setForm(emptyForm);

      setPreviewUrl("");

      setSlugEdited(false);
    }

    setKnowledgeImgFile(null);
  }, [open, knowledge]);

  /* =====================================================
   * SET EDITOR HTML
   * ===================================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    if (!editorRef.current) {
      return;
    }

    editorRef.current.innerHTML = knowledge?.content || "";
  }, [open, knowledge]);

  /* =====================================================
   * CLEAN BLOB
   * ===================================================== */

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  if (!open) {
    return null;
  }

  /* =====================================================
   * CHANGE
   * ===================================================== */

  const handleChange = (
    key: keyof AddKnowledgeInput,
    value: string | number | boolean,
  ) => {
    setForm((prev) => ({
      ...prev,

      [key]: value,
    }));
  };

  /* =====================================================
   * TITLE
   * ===================================================== */

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,

      title: value,

      slug: slugEdited ? prev.slug : createSlug(value),
    }));
  };

  /* =====================================================
   * IMAGE
   * ===================================================== */

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file hình ảnh.");

      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      alert("Ảnh không được lớn hơn 8MB.");

      return;
    }

    if (previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    setKnowledgeImgFile(file);

    const objectUrl = URL.createObjectURL(file);

    setPreviewUrl(objectUrl);
  };

  /* =====================================================
   * RICH TEXT
   * ===================================================== */

  const updateContent = () => {
    const html = editorRef.current?.innerHTML || "";

    handleChange("content", html);
  };

  const execEditorCommand = (command: string, value?: string) => {
    editorRef.current?.focus();

    document.execCommand(command, false, value);

    updateContent();
  };

  const setBlock = (tag: "P" | "H2" | "H3") => {
    editorRef.current?.focus();

    document.execCommand("formatBlock", false, tag);

    updateContent();
  };

  const insertLink = () => {
    const url = window.prompt("Nhập đường dẫn liên kết:", "https://");

    if (!url) {
      return;
    }

    execEditorCommand("createLink", url);
  };

  /* =====================================================
   * SUBMIT
   * ===================================================== */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const content = editorRef.current?.innerHTML || "";

    if (!form.title.trim()) {
      alert("Vui lòng nhập tiêu đề bài viết.");

      return;
    }

    if (!form.slug.trim()) {
      alert("Vui lòng nhập đường dẫn bài viết.");

      return;
    }

    if (!content.trim()) {
      alert("Vui lòng nhập nội dung bài viết.");

      return;
    }

    await onSave(
      {
        ...form,

        title: form.title.trim(),

        slug: createSlug(
          form.slug,
        ),

        category:
          form.category.trim(),

        excerpt:
          form.excerpt.trim(),

        coverUrl:
          form.coverUrl.trim(),

        author:
          form.author.trim(),

        content,

        views:
          Number(form.views) || 0,

        sortOrder:
          Number(
            form.sortOrder,
          ) || 0,
      },

      knowledgeImgFile,
    );
  };

  /* =====================================================
   * UI
   * ===================================================== */

  return (
    <div
      className="admin-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <form
        className="admin-modal knowledge-admin-modal"
        onSubmit={handleSubmit}
      >
        {/* HEADER */}

        <div className="admin-modal-header">
          <div>
            <div className="eyebrow">
              {knowledge ? "Edit Knowledge" : "New Knowledge"}
            </div>

            <h2>{knowledge ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}</h2>
          </div>

          <button type="button" className="admin-modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* BODY */}

        <div className="admin-form-grid">
          {/* TITLE */}

          <div className="admin-form-group full">
            <label>
              Tiêu đề bài viết
              <span className="required">*</span>
            </label>

            <input
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ví dụ: Sai lầm khi dạy nói"
            />
          </div>

          {/* SLUG */}

          <div className="admin-form-group full">
            <label>Đường dẫn bài viết</label>

            <div className="knowledge-slug-input">
              <span>#kien-thuc-khoa-hoc/</span>

              <input
                value={form.slug}
                onChange={(e) => {
                  setSlugEdited(true);

                  handleChange("slug", createSlug(e.target.value));
                }}
                placeholder="sai-lam-khi-day-noi"
              />
            </div>

            <small className="admin-form-hint">
              Đường dẫn được tự tạo theo tiêu đề. Bạn vẫn có thể chỉnh sửa.
            </small>
          </div>

          {/* CATEGORY */}

          <div className="admin-form-group">
            <label>Chủ đề / Danh mục</label>

            <input
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              placeholder="Ví dụ: Ngôn ngữ"
            />
          </div>

          {/* AUTHOR */}

          <div className="admin-form-group">
            <label>Tác giả</label>

            <input
              value={form.author}
              onChange={(e) => handleChange("author", e.target.value)}
              placeholder="Tên tác giả"
            />
          </div>

          {/* ORDER */}

          <div className="admin-form-group">
            <label>Thứ tự hiển thị</label>

            <input
              type="number"
              min={0}
              value={form.sortOrder}
              onChange={(e) =>
                handleChange("sortOrder", Number(e.target.value))
              }
            />
          </div>

          {/* VIEWS */}

          <div className="admin-form-group">
            <label>Lượt xem</label>

            <input
              type="number"
              min={0}
              value={form.views}
              onChange={(e) => handleChange("views", Number(e.target.value))}
            />
          </div>

          {/* EXCERPT */}

          <div className="admin-form-group full">
            <label>Mô tả ngắn</label>

            <textarea
              rows={3}
              value={form.excerpt}
              onChange={(e) => handleChange("excerpt", e.target.value)}
              placeholder="Nội dung ngắn hiển thị trên card..."
            />

            <small className="admin-form-hint">
              Phần này chỉ xuất hiện ở card ngoài trang danh sách.
            </small>
          </div>

          {/* IMAGE */}

          <div className="admin-form-group full">
            <label>Ảnh đại diện</label>

            <div className="admin-image-upload">
              <div className="admin-image-preview">
                {previewUrl ? (
                  <img src={previewUrl} alt="Knowledge preview" />
                ) : (
                  <div className="admin-image-empty">Chưa có ảnh</div>
                )}
              </div>

              <div className="admin-image-upload-actions">
                <label className="admin-btn secondary">
                  Chọn ảnh
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>

                {previewUrl ? (
                  <button
                    type="button"
                    className="admin-action-link danger"
                    onClick={() => {
                      if (previewUrl.startsWith("blob:")) {
                        URL.revokeObjectURL(previewUrl);
                      }

                      setKnowledgeImgFile(null);

                      setPreviewUrl("");

                      setForm((prev) => ({
                        ...prev,

                        coverUrl: "",
                      }));
                    }}
                  >
                    Xóa ảnh
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div className="admin-form-group full">
            <label>
              Nội dung bài viết
              <span className="required">*</span>
            </label>

            <div className="knowledge-editor">
              {/* TOOLBAR */}

              <div className="knowledge-editor-toolbar">
                <button
                  type="button"
                  title="Đoạn văn"
                  onClick={() => setBlock("P")}
                >
                  P
                </button>

                <button
                  type="button"
                  title="Tiêu đề lớn"
                  onClick={() => setBlock("H2")}
                >
                  H2
                </button>

                <button
                  type="button"
                  title="Tiêu đề nhỏ"
                  onClick={() => setBlock("H3")}
                >
                  H3
                </button>

                <span />

                <button
                  type="button"
                  title="In đậm"
                  onClick={() => execEditorCommand("bold")}
                >
                  <b>B</b>
                </button>

                <button
                  type="button"
                  title="In nghiêng"
                  onClick={() => execEditorCommand("italic")}
                >
                  <i>I</i>
                </button>

                <button
                  type="button"
                  title="Gạch chân"
                  onClick={() => execEditorCommand("underline")}
                >
                  <u>U</u>
                </button>

                <span />

                <button
                  type="button"
                  title="Danh sách chấm tròn"
                  onClick={() => execEditorCommand("insertUnorderedList")}
                >
                  • List
                </button>

                <button
                  type="button"
                  title="Danh sách số"
                  onClick={() => execEditorCommand("insertOrderedList")}
                >
                  1. List
                </button>

                <span />

                <button
                  type="button"
                  title="Chèn liên kết"
                  onClick={insertLink}
                >
                  🔗 Link
                </button>

                <button
                  type="button"
                  title="Xóa định dạng"
                  onClick={() => execEditorCommand("removeFormat")}
                >
                  Xóa format
                </button>
              </div>

              {/* EDITOR */}

              <div
                ref={editorRef}
                className="knowledge-editor-content"
                contentEditable
                suppressContentEditableWarning
                data-placeholder="Nhập nội dung bài viết tại đây..."
                onInput={updateContent}
              />
            </div>

            <small className="admin-form-hint">
              Có thể tạo tiêu đề, đoạn văn, in đậm, danh sách và liên kết như
              bài viết mẫu.
            </small>
          </div>

          {/* ACTIVE */}

          <div className="admin-form-group full">
            <label className="admin-check-row">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => handleChange("isActive", e.target.checked)}
              />

              <span>Hiển thị bài viết trên website</span>
            </label>
          </div>
        </div>

        {/* FOOTER */}

        <div className="admin-modal-footer">
          <button
            type="button"
            className="admin-btn secondary"
            onClick={onClose}
          >
            Hủy
          </button>

          <button type="submit" className="admin-btn primary">
            {knowledge ? "Lưu thay đổi" : "Đăng bài viết"}
          </button>
        </div>
      </form>
    </div>
  );
}
