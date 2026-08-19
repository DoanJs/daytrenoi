import {
  useMemo,
  useState,
} from "react";

import type {
  AddBookInput,
  BookModel,
} from "../../types/admin.types";

import {
  formatMoney,
} from "../../utils/adminFormat";

import BookAdminModal
  from "../../components/BookAdminModal/BookAdminModal";

import AdminConfirmModal
  from "../../components/AdminConfirmModal/AdminConfirmModal";

interface Props {
  books: BookModel[];

  onAdd: (
    data: AddBookInput,
  ) => Promise<void>;

  onUpdate: (
    id: string,
    data: AddBookInput,
  ) => Promise<void>;

  onDelete: (
    id: string,
  ) => Promise<void>;
}

export default function AdminBooks({
  books,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const [
    search,
    setSearch,
  ] = useState("");

  const [
    editing,
    setEditing,
  ] =
    useState<BookModel | null>(
      null,
    );

  const [
    formOpen,
    setFormOpen,
  ] = useState(false);

  const [
    deleteTarget,
    setDeleteTarget,
  ] =
    useState<BookModel | null>(
      null,
    );

  const filtered = useMemo(() => {
    const keyword =
      search
        .trim()
        .toLowerCase();

    return books.filter(
      (book) =>
        [
          book.name,
          book.category,
        ]
          .join(" ")
          .toLowerCase()
          .includes(
            keyword,
          ),
    );
  }, [
    books,
    search,
  ]);

  const handleSave =
    async (
      data: AddBookInput,
    ) => {
      if (editing) {
        await onUpdate(
          editing.id,
          data,
        );
      } else {
        await onAdd(
          data,
        );
      }

      setFormOpen(
        false,
      );

      setEditing(
        null,
      );
    };

  return (
    <>
      <div className="admin-page-header">
        <div>
          <div className="eyebrow">
            Books
          </div>

          <h1>
            Quản lý sách
          </h1>

          <p>
            Chỉnh nội dung, giá bán và trạng thái hiển thị của sách.
          </p>
        </div>

        <button
          type="button"
          className="admin-btn primary"
          onClick={() => {
            setEditing(
              null,
            );

            setFormOpen(
              true,
            );
          }}
        >
          + Thêm sách
        </button>
      </div>

      <div className="admin-toolbar">
        <input
          className="admin-search"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value,
            )
          }
          placeholder="Tìm tên sách, danh mục..."
        />

        <select className="admin-filter">
          <option>
            {books.length} đầu sách
          </option>
        </select>
      </div>

      <div className="admin-books-grid">
        {filtered.map(
          (book) => (
            <div
              className="admin-book-card"
              key={
                book.id
              }
            >
              <div className="cover">
                {book.coverUrl ? (
                  <img
                    src={
                      book.coverUrl
                    }
                    alt={
                      book.alt ||
                      book.name
                    }
                  />
                ) : (
                  <span>
                    📚
                  </span>
                )}
              </div>

              <div className="body">
                <div className="category">
                  {
                    book.category
                  }
                </div>

                <h3>
                  {
                    book.name
                  }
                </h3>

                <div className="price">
                  {formatMoney(
                    book.price,
                  )}
                </div>
              </div>

              <div className="admin-card-footer">
                <span
                  className={`admin-badge ${
                    book.isActive
                      ? "active"
                      : ""
                  }`}
                >
                  {book.isActive
                    ? "Đang hiển thị"
                    : "Đã ẩn"}
                </span>

                <div>
                  <button
                    type="button"
                    className="admin-action-link"
                    onClick={() => {
                      setEditing(
                        book,
                      );

                      setFormOpen(
                        true,
                      );
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
                        book,
                      )
                    }
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {!filtered.length ? (
        <div className="admin-empty">
          Không tìm thấy sách phù hợp.
        </div>
      ) : null}

      <BookAdminModal
        open={formOpen}
        book={editing}
        onClose={() => {
          setFormOpen(
            false,
          );

          setEditing(
            null,
          );
        }}
        onSave={
          handleSave
        }
      />

      <AdminConfirmModal
        open={
          Boolean(
            deleteTarget,
          )
        }
        title="Xóa sách?"
        description={`Bạn có chắc muốn xóa "${deleteTarget?.name || ""}" khỏi Firestore?`}
        onClose={() =>
          setDeleteTarget(
            null,
          )
        }
        onConfirm={async () => {
          if (
            !deleteTarget
          ) {
            return;
          }

          await onDelete(
            deleteTarget.id,
          );

          setDeleteTarget(
            null,
          );
        }}
      />
    </>
  );
}
