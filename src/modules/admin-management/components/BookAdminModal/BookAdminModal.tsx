import {
  useEffect,
  useState,
} from "react";

import type {
  AddBookInput,
  BookModel,
} from "../../types/admin.types";

import "./BookAdminModal.css";

interface Props {
  book: BookModel | null;

  open: boolean;

  onClose: () => void;

  onSave: (
    data: AddBookInput,
  ) => Promise<void>;
}

const createEmpty =
  (): AddBookInput => ({
    name: "",
    category: "",
    description: "",
    price: 0,
    coverUrl: "",
    alt: "",
    zaloUrl: "",
    isActive: true,
    sortOrder: 1,
  } as AddBookInput);

export default function BookAdminModal({
  book,
  open,
  onClose,
  onSave,
}: Props) {
  const [
    form,
    setForm,
  ] =
    useState<AddBookInput>(
      createEmpty(),
    );

  useEffect(() => {
    if (book) {
      const {
        id,
        createAt,
        updateAt,
        ...editable
      } = book;

      setForm(
        editable as AddBookInput,
      );
    } else {
      setForm(
        createEmpty(),
      );
    }
  }, [
    book,
    open,
  ]);

  if (!open) return null;

  const setValue = (
    key: keyof AddBookInput,
    value: unknown,
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSave =
    async () => {
      if (
        !String(
          form.name || "",
        ).trim()
      ) {
        return;
      }

      await onSave(
        form,
      );
    };

  return (
    <div
      className="admin-modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="admin-form-modal">
        <div className="admin-modal-head">
          <div>
            <span>
              {book
                ? "CHỈNH SỬA SÁCH"
                : "THÊM SÁCH"}
            </span>

            <h2>
              {book
                ? book.name
                : "Thêm đầu sách mới"}
            </h2>
          </div>

          <button
            type="button"
            className="admin-modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="admin-form-grid">
          <label>
            <span>
              Tên sách *
            </span>

            <input
              value={
                String(
                  form.name || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "name",
                  e.target.value,
                )
              }
            />
          </label>

          <label>
            <span>
              Danh mục
            </span>

            <input
              value={
                String(
                  form.category || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "category",
                  e.target.value,
                )
              }
            />
          </label>

          <label>
            <span>
              Giá bán
            </span>

            <input
              type="number"
              min={0}
              value={
                Number(
                  form.price || 0,
                )
              }
              onChange={(e) =>
                setValue(
                  "price",
                  Number(
                    e.target.value,
                  ),
                )
              }
            />
          </label>

          <label>
            <span>
              Thứ tự hiển thị
            </span>

            <input
              type="number"
              min={0}
              value={
                Number(
                  form.sortOrder || 0,
                )
              }
              onChange={(e) =>
                setValue(
                  "sortOrder",
                  Number(
                    e.target.value,
                  ),
                )
              }
            />
          </label>

          <label className="full">
            <span>
              Ảnh bìa
            </span>

            <input
              value={
                String(
                  form.coverUrl || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "coverUrl",
                  e.target.value,
                )
              }
              placeholder="/images/..."
            />
          </label>

          <label className="full">
            <span>
              Alt ảnh
            </span>

            <input
              value={
                String(
                  form.alt || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "alt",
                  e.target.value,
                )
              }
            />
          </label>

          <label className="full">
            <span>
              Link Zalo
            </span>

            <input
              value={
                String(
                  form.zaloUrl || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "zaloUrl",
                  e.target.value,
                )
              }
            />
          </label>

          <label className="full">
            <span>
              Mô tả
            </span>

            <textarea
              rows={5}
              value={
                String(
                  form.description || "",
                )
              }
              onChange={(e) =>
                setValue(
                  "description",
                  e.target.value,
                )
              }
            />
          </label>

          <label className="admin-check full">
            <input
              type="checkbox"
              checked={
                Boolean(
                  form.isActive,
                )
              }
              onChange={(e) =>
                setValue(
                  "isActive",
                  e.target.checked,
                )
              }
            />

            <span>
              Hiển thị sách trên website
            </span>
          </label>
        </div>

        <div className="admin-modal-actions">
          <button
            type="button"
            className="admin-btn secondary"
            onClick={onClose}
          >
            Hủy
          </button>

          <button
            type="button"
            className="admin-btn primary"
            onClick={handleSave}
          >
            {book
              ? "Lưu thay đổi"
              : "Thêm sách"}
          </button>
        </div>
      </div>
    </div>
  );
}
