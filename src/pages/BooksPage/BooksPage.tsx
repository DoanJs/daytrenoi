import { useEffect, useState } from "react";
import { BookOrderForm, SelectedBook } from "../../modules/book-order";
import "./BooksPage.css";
import { BooksPageData } from "./BooksPage.types";

import { BookModel } from "../../models/site";
import { getBooks } from "../../services/bookService";

// const dataBooks = [
//   {
//     id: "",

//     name: "Lên tiếng",
//     category: "Giác quan · Hành vi · Ngôn ngữ",
//     description: "Cẩm nang thực hành giúp cha mẹ, giáo viên và chuyên viên hiểu đúng hệ thống giác quan, sàng lọc sớm khó khăn và “kê đơn giác quan — bốc thuốc ngôn ngữ” qua thiết kế hoạt động sinh hoạt hằng ngày, nhằm điều hoà cảm giác, hỗ trợ hành vi và phát triển giao tiếp lời nói tự nhiên, bền vững.",

//     price: 399000,

//     coverUrl: "https://res.cloudinary.com/dr8wxl8it/image/upload/v1787120383/len-tieng-e5f17cd6_ul52nd.jpg",
//     alt: "",

//     zaloUrl: "",

//     // Có hiển thị trên web không
//     isActive: true,

//     // Thứ tự hiển thị
//     sortOrder: 0,

//     // Nếu muốn gắn nhãn
//     badge: "",

//     // Ví dụ "Cha mẹ", "Chuyên viên", ...
//     targetAudience: [],

//     createAt: serverTimestamp(),
//     updateAt: serverTimestamp(),
//   },
//   {
//     id: "",

//     name: "Chơi lớn",
//     category: "Chơi · Phát triển",
//     description: "Vai trò của chơi và mối liên hệ giữa chơi với ngôn ngữ. Kèm bảng kiểm phát triển, quy trình dạy kỹ năng, cách tương tác — chơi với trẻ kể cả trẻ có rào cản phát triển, gợi ý hoạt động chơi, lồng ghép chơi trong sinh hoạt và dùng chơi để dạy các kỹ năng khác.",

//     price: 326000,

//     coverUrl: "https://res.cloudinary.com/dr8wxl8it/image/upload/v1787120382/choi-lon-06fe4255_ikhqiq.jpg",
//     alt: "",

//     zaloUrl: "",

//     // Có hiển thị trên web không
//     isActive: true,

//     // Thứ tự hiển thị
//     sortOrder: 0,

//     // Nếu muốn gắn nhãn
//     badge: "",

//     // Ví dụ "Cha mẹ", "Chuyên viên", ...
//     targetAudience: [],

//     createAt: serverTimestamp(),
//     updateAt: serverTimestamp(),
//   },
//   {
//     id: "",

//     name: "100 từ đầu tiên của bé",
//     category: "Chậm nói · Vốn từ",
//     description: "Tổng hợp 100 từ trẻ HIỂU và NÓI được sớm nhất, nghiên cứu và thống kê từ 600 trẻ em Việt Nam ở cả ba miền. Giới thiệu lộ trình phát triển từ vựng theo từng giai đoạn, chia rõ bốn nhóm từ quan trọng — danh từ, động từ, từ cốt lõi, từ khái niệm — kèm hướng dẫn cụ thể cách phát triển từng nhóm.",

//     price: 245000,

//     coverUrl: "https://res.cloudinary.com/dr8wxl8it/image/upload/v1787120381/100-tu-au-tien-cua-be-532c8917_d5y1pe.jpg",
//     alt: "",

//     zaloUrl: "",

//     // Có hiển thị trên web không
//     isActive: true,

//     // Thứ tự hiển thị
//     sortOrder: 0,

//     // Nếu muốn gắn nhãn
//     badge: "",

//     // Ví dụ "Cha mẹ", "Chuyên viên", ...
//     targetAudience: [],

//     createAt: serverTimestamp(),
//     updateAt: serverTimestamp(),
//   },
//   {
//     id: "",

//     name: "42 trò chơi giúp trẻ hay nói",
//     category: "Chơi để nói",
//     description: "Nhận diện trẻ đang ở giai đoạn phát triển nào, đọc hiểu trẻ từ những hành vi mơ hồ, thiết kế hoạt động chơi phù hợp với năng lực hiện tại. Từng trò chơi được thiết kế chi tiết: bạn nói gì, làm gì, dùng gì.",

//     price: 288000,

//     coverUrl: "https://res.cloudinary.com/dr8wxl8it/image/upload/v1787120380/42-tro-choi-giup-tre-hay-noi-13aeaa3c_eyju97.jpg",
//     alt: "",

//     zaloUrl: "",

//     // Có hiển thị trên web không
//     isActive: true,

//     // Thứ tự hiển thị
//     sortOrder: 0,

//     // Nếu muốn gắn nhãn
//     badge: "",

//     // Ví dụ "Cha mẹ", "Chuyên viên", ...
//     targetAudience: [],

//     createAt: serverTimestamp(),
//     updateAt: serverTimestamp(),
//   },
//   {
//     id: "",

//     name: "“Bản đồ” 5 năm đầu đời của con",
//     category: "Cha mẹ · 0–5 tuổi",
//     description: "Cẩm nang giúp cha mẹ hiểu từng bước trưởng thành của trẻ 0–5 tuổi: theo dõi vận động, ngôn ngữ, nhận thức và kỹ năng xã hội; checklist phát triển cụ thể; phần ghi lại dấu mốc của con; và những dấu hiệu “cờ đỏ” của rối loạn phổ tự kỷ để phát hiện sớm.",

//     price: 199000,

//     coverUrl: "https://res.cloudinary.com/dr8wxl8it/image/upload/v1787120381/ban-o-5-nam-au-oi-cua-con-763c4a96_pehaww.jpg",
//     alt: "",

//     zaloUrl: "",

//     // Có hiển thị trên web không
//     isActive: true,

//     // Thứ tự hiển thị
//     sortOrder: 0,

//     // Nếu muốn gắn nhãn
//     badge: "",

//     // Ví dụ "Cha mẹ", "Chuyên viên", ...
//     targetAudience: [],

//     createAt: serverTimestamp(),
//     updateAt: serverTimestamp(),
//   },
// ];

interface Props {
  data: BooksPageData;
}

export default function BooksPage({ data }: Props) {
  const [books, setBooks] = useState<BookModel[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [selectedBook, setSelectedBook] = useState<SelectedBook | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setIsLoading(true);

        const data = await getBooks();

        setBooks(data);
      } catch (error) {
        console.error("getBooks error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleOrderBook = (book: SelectedBook) => {
    setSelectedBook(book);
  };

  const handleCloseOrder = () => {
    setSelectedBook(null);
  };

  // const handleAddData = async () => {

  //   const promises = dataBooks.map((item, index) => {
  //     addBook({
  //       ...item,
  //       sortOrder: index + 1,
  //     })
  //   })

  //   await Promise.all(promises)
  //   console.log('completed')
  // }

  return (
    <div className={"pg"}>
      {/* <button onClick={handleAddData}>ADD DATA</button> */}
      <div className={"hero"} style={{ padding: "48px 0 34px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t001}</div>
          <h1 style={{ maxWidth: "18ch" }}>
            {data.texts.t002}
            <br />
            {data.texts.t003}
          </h1>
          <p className={"lead"}>{data.texts.t004}</p>
        </div>
      </div>
      <section className={"tight"}>
        <div className={"wrap"}>
          {/* <div className={"books"}>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt001} src={data.images.img001} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t005}</span>
                <h3>{data.texts.t006}</h3>
                <p>{data.texts.t007}</p>
                <div className={"price"}>{data.texts.t008}</div>
                <a
                  className={"btn p"}
                  href={data.links.link001}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t009}
                </a>
                <button
                  type="button"
                  className="btn p"
                  onClick={() =>
                    handleOrderBook({
                      bookId: "book-001",
                      bookName: data.texts.t006,
                      coverUrl: data.images.img001,
                      price: 280000,
                    })
                  }
                >
                  Đặt sách
                </button>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt002} src={data.images.img002} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t010}</span>
                <h3>{data.texts.t011}</h3>
                <p>{data.texts.t012}</p>
                <div className={"price"}>{data.texts.t013}</div>
                <a
                  className={"btn p"}
                  href={data.links.link002}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t014}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt003} src={data.images.img003} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t015}</span>
                <h3>{data.texts.t016}</h3>
                <p>{data.texts.t017}</p>
                <div className={"price"}>{data.texts.t018}</div>
                <a
                  className={"btn p"}
                  href={data.links.link003}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t019}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt004} src={data.images.img004} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t020}</span>
                <h3>{data.texts.t021}</h3>
                <p>{data.texts.t022}</p>
                <div className={"price"}>{data.texts.t023}</div>
                <a
                  className={"btn p"}
                  href={data.links.link004}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t024}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt005} src={data.images.img005} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t025}</span>
                <h3>{data.texts.t026}</h3>
                <p>{data.texts.t027}</p>
                <div className={"price"}>{data.texts.t028}</div>
                <a
                  className={"btn p"}
                  href={data.links.link005}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t029}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt006} src={data.images.img006} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t030}</span>
                <h3>{data.texts.t031}</h3>
                <p>{data.texts.t032}</p>
                <div className={"price"}>{data.texts.t033}</div>
                <a
                  className={"btn p"}
                  href={data.links.link006}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t034}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt007} src={data.images.img007} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t035}</span>
                <h3>{data.texts.t036}</h3>
                <p>{data.texts.t037}</p>
                <div className={"price"}>{data.texts.t038}</div>
                <a
                  className={"btn p"}
                  href={data.links.link007}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t039}
                </a>
              </div>
            </div>
          </div> */}

          <div className="books">
            {/* {books.map((book) => (
              <div className="book" key={book.id}>
                <div className="ph">
                  <img src={book.coverUrl} alt={book.alt} />
                </div>

                <div className="bd">
                  <span className="tagline">{book.category}</span>

                  <h3>{book.name}</h3>

                  <p>{book.description}</p>

                  <div className="price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(book.price)}
                  </div>

                  <button
                    type="button"
                    className="btn p"
                    onClick={() =>
                      setSelectedBook({
                        bookId: book.id,

                        bookName: book.name,

                        price: book.price,

                        coverUrl: book.coverUrl,
                      })
                    }
                  >
                    Đặt sách
                  </button>
                </div>
              </div>
            ))} */}

            {books.map((book) => (
              <div
                className={`book ${book.soldOut ? "is-sold-out" : ""}`}
                key={book.id}
              >
                <div className="ph">
                  <img src={book.coverUrl} alt={book.alt} />
                </div>

                <div className="bd">
                  <span className="tagline">{book.category}</span>

                  <h3>{book.name}</h3>

                  <p>{book.description}</p>

                  {/* Dấu mộc SOLD OUT */}
                  {book.soldOut && (
                    <div className="sold-out-stamp" aria-label="Đã bán hết">
                      <div className="sold-out-stamp__top">SOLD OUT</div>

                      <div className="sold-out-stamp__center">SOLD OUT</div>

                      <div className="sold-out-stamp__bottom">★ ★ ★</div>
                    </div>
                  )}

                  <div className="price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(book.price)}
                  </div>

                  <button
                    type="button"
                    className={`btn p ${book.soldOut ? "sold-out-btn" : ""}`}
                    disabled={book.soldOut}
                    onClick={() => {
                      if (book.soldOut) return;

                      setSelectedBook({
                        bookId: book.id,
                        bookName: book.name,
                        price: book.price,
                        coverUrl: book.coverUrl,
                      });
                    }}
                  >
                    {book.soldOut ? "Đã bán hết" : "Đặt sách"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className={"muted"} style={{ marginTop: "20px" }}>
            {data.texts.t040}
            <b>{data.texts.t041}</b>
            {data.texts.t042}
          </p>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>{data.texts.t043}</h2>
          <div
            className={"grid2"}
            style={{ marginTop: "20px", alignItems: "start" }}
          >
            <div style={{ display: "grid", gap: "12px" }}>
              <img
                alt={data.alts.alt008}
                src={data.images.img008}
                style={{
                  borderRadius: "14px",
                  boxShadow: "0 10px 26px rgba(36,28,22,.13)",
                }}
              />
              <img
                alt={data.alts.alt009}
                src={data.images.img009}
                style={{
                  borderRadius: "14px",
                  boxShadow: "0 10px 26px rgba(36,28,22,.13)",
                }}
              />
              <img
                alt={data.alts.alt010}
                src={data.images.img010}
                style={{
                  borderRadius: "14px",
                  boxShadow: "0 10px 26px rgba(36,28,22,.13)",
                }}
              />
            </div>
            <div className={"card"}>
              <span className={"tagline pro"}>{data.texts.t044}</span>
              <h3>{data.texts.t045}</h3>
              <p>{data.texts.t046}</p>
              <p className={"muted"} style={{ marginTop: "12px" }}>
                {data.texts.t047}
              </p>
              <a
                className={"btn s"}
                href={data.links.link008}
                style={{ marginTop: "12px" }}
              >
                {data.texts.t048}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <h2>{data.texts.t049}</h2>
          <div className={"grid3"} style={{ marginTop: "20px" }}>
            <div className={"card"}>
              <h3>{data.texts.t050}</h3>
              <p>
                {data.texts.t051}
                <b>{data.texts.t052}</b>
                {data.texts.t053}
                <b>{data.texts.t054}</b>
                {data.texts.t055}
              </p>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t056}</h3>
              <p>
                <b>{data.texts.t057}</b>
                {data.texts.t058}
                <b>{data.texts.t059}</b>
                {data.texts.t060}
              </p>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t061}</h3>
              <p>
                <b>{data.texts.t062}</b>
                {data.texts.t063}
              </p>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t064}</h3>
              <p>
                <b>{data.texts.t065}</b>
                {data.texts.t066}
                <b>{data.texts.t067}</b>
                {data.texts.t068}
              </p>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t069}</h3>
              <p>
                {data.texts.t070}
                <a href={data.links.link009}>{data.texts.t071}</a>
                {data.texts.t072}
              </p>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t073}</h3>
              <p>
                <b>{data.texts.t074}</b>
                {data.texts.t075}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>{data.texts.t076}</h2>
            <p>{data.texts.t077}</p>
            <div className={"btns"}>
              <a
                className={"btn g"}
                href={data.links.link010}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t078}
              </a>
              <a className={"btn s"} href={data.links.link011}>
                {data.texts.t079}
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedBook && (
        <div
          className="book-order-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseOrder();
            }
          }}
        >
          <div className="book-order-popup">
            <BookOrderForm
              book={selectedBook}
              zaloOaUrl="https://zalo.me/0866620583"
              onClose={handleCloseOrder}
              onOrderCreated={(order) => {
                console.log("Đã tạo đơn:", order);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
