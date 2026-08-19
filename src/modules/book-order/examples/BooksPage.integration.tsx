import { useState } from "react";
import { BookOrderForm, SelectedBook } from "../index";
import "./BooksPage.integration.css";

export default function BooksPageExample() {
  const [selectedBook, setSelectedBook] = useState<SelectedBook | null>(null);

  return (
    <>
      <button
        type="button"
        className="btn p"
        onClick={() =>
          setSelectedBook({
            bookId: "book-001",
            bookName: "Bộ ABC",
            price: 280000,
            coverUrl: "/images/book-001.jpg",
          })
        }
      >
        Đặt sách
      </button>

      {selectedBook ? (
        <div
          className="bo-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
        >
          <BookOrderForm
            book={selectedBook}
            zaloOaUrl="https://zalo.me/0866620583"
            onClose={() => setSelectedBook(null)}
          />
        </div>
      ) : null}
    </>
  );
}
