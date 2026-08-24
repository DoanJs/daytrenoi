import { useState, useEffect, useMemo } from "react";
import QuickTest from "../../components/QuickTest/QuickTest";
import { BookModel } from "../../models/site";
import { BookOrderForm, SelectedBook } from "../../modules/book-order";
import { getBooks } from "../../services/bookService";
import "./ParentPage.css";
import { ParentPageData } from "./ParentPage.types";

interface Props {
  data: ParentPageData;
}

export default function ParentPage({ data }: Props) {
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

  const featuredBooks = useMemo(() => {
    return [...books]
      .sort((a, b) => (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999))
      .slice(0, 3);
  }, [books]);

  const handleCloseOrder = () => {
    setSelectedBook(null);
  };

  return (
    <div className={"pg"}>
      <div className={"hero"} style={{ padding: "52px 0 40px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t001}</div>
          <h1 style={{ maxWidth: "19ch" }}>
            {data.texts.t002}
            <br />
            {/* {data.texts.t003} */}
          </h1>
          <p className={"lead"}>{data.texts.t004}</p>
          <div className={"btns"} style={{ marginTop: "22px" }}>
            <a className={"btn p"} href={data.links.link001}>
              {data.texts.t005}
            </a>
            <a
              className={"btn s"}
              href={data.links.link002}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "green",
                color: "#fff",
              }}
            >
              {data.texts.t006}
            </a>
            <a className={"btn p"} href={"#lop-cha-me"}>
              Lớp dành cho phụ huynh
            </a>
          </div>
        </div>
      </div>
      <QuickTest />
      <section className={"tight"} id={"dau-hieu"}>
        <div className={"wrap"}>
          <h2>{data.texts.t007}</h2>
          <p className={"lead"} style={{ marginBottom: "22px" }}>
            {data.texts.t008}
          </p>
          <div className={"grid2"}>
            <ul className={"check"}>
              <li>{data.texts.t009}</li>
              <li>{data.texts.t010}</li>
              <li>{data.texts.t011}</li>
              <li>{data.texts.t012}</li>
              <li>{data.texts.t013}</li>
            </ul>
            <ul className={"check"}>
              <li>{data.texts.t014}</li>
              <li>{data.texts.t015}</li>
              <li>{data.texts.t016}</li>
              <li>{data.texts.t017}</li>
              <li>{data.texts.t018}</li>
            </ul>
          </div>
          <div className={"note"} style={{ marginTop: "18px" }}>
            <b>{data.texts.t019}</b>
            <a
              href={data.links.link003}
              style={{ color: "var(--o-d)", fontWeight: "600" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {data.texts.t020}
            </a>
            <span
              className={"muted"}
              style={{ display: "block", marginTop: "5px" }}
            >
              {data.texts.t021}
            </span>
          </div>
          <div className={"note"} style={{ marginTop: "22px" }}>
            <b>{data.texts.t022}</b>
            {data.texts.t023}
          </div>
        </div>
      </section>
      <section id={"kham"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t024}</div>
          <div
            style={{ float: "right", width: "290px", margin: "0 0 18px 26px" }}
          >
            <img
              alt={data.alts.alt001}
              className={"photo"}
              src={data.images.img001}
            />
          </div>
          <h2>{data.texts.t025}</h2>
          <p className={"lead"} style={{ marginBottom: "26px" }}>
            {data.texts.t026}
          </p>
          <div className={"steps"}>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t027}</h3>
                <p>{data.texts.t028}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t029}</h3>
                <p>{data.texts.t030}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t031}</h3>
                <p>{data.texts.t032}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t033}</h3>
                <p>{data.texts.t034}</p>
              </div>
            </div>
          </div>
          <div className={"btns"} style={{ marginTop: "24px" }}>
            <a
              className={"btn p"}
              href={data.links.link004}
              target="_blank"
              rel="noreferrer"
            >
              {data.texts.t035}
            </a>
            <a className={"btn s"} href={data.links.link005}>
              {data.texts.t036}
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"} id={"can-thiep"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t037}</div>
          <h2>{data.texts.t038}</h2>
          <img
            src="/images/chuong-trinh-phuong-phap-tai-owlspeaks.jpg"
            alt="can-thiep-cho-con-tai-owlspeaks"
            style={{
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          />
          <div
            className={"card"}
            style={{
              textAlign: "justify",
              whiteSpace: "pre-line",
            }}
          >
            <b>
              OWL SPEAKS – “Tổ Cú” là trung tâm ngôn ngữ trị liệu chuyên sâu đầu
              tiên tại miền Bắc, thành lập năm 2016 bởi TS.BS. Nguyễn Hoàng
              Oanh. Với nền tảng y khoa kết hợp chuyên môn sâu về âm ngữ trị
              liệu, bác sĩ Hoàng Oanh theo đuổi hướng tiếp cận liên ngành: một
              trẻ chậm nói không chỉ cần được dạy nói mà cần được nhìn nhận đồng
              thời ở khía cạnh y học, giác quan, vận động, nhận thức và môi
              trường gia đình. Đây chính là nguồn gốc của mô hình one-stop đang
              được áp dụng tại Trung tâm. Bác sĩ trực tiếp tham gia xây dựng
              chương trình chuyên môn, đào tạo đội ngũ chuyên viên và đồng hành
              cùng phụ huynh trong suốt quá trình con tham gia tổ Cú, với quan
              điểm nhất quán: gia đình là một phần của quá trình trị liệu, không
              phải người đứng ngoài quan sát.
            </b>
          </div>
          <div className={"grid2"} style={{ marginTop: "22px" }}>
            <div className={"card"}>
              <h3>{data.texts.t039}</h3>
              <ul>
                <li>
                  {data.texts.t040}
                  <b>{data.texts.t041}</b>
                  {data.texts.t042}
                </li>
                <li>{data.texts.t043}</li>
                <li>{data.texts.t044}</li>
                <li>{data.texts.t045}</li>
                <li>{data.texts.t046}</li>
              </ul>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t047}</h3>
              <ul>
                <li>{data.texts.t048}</li>
                <li>{data.texts.t049}</li>
                <li>{data.texts.t050}</li>
                <li>{data.texts.t051}</li>
              </ul>
            </div>
          </div>
          <div className={"note"} style={{ marginTop: "20px" }}>
            <b>{data.texts.t052}</b>
            {data.texts.t053}
          </div>
          <div className={"btns"} style={{ marginTop: "22px" }}>
            <a
              className={"btn p"}
              href={data.links.link006}
              target="_blank"
              rel="noreferrer"
            >
              {data.texts.t054}
            </a>
          </div>
        </div>
      </section>
      <section id={"hoc"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t055}</div>
          <h2>{data.texts.t056}</h2>
          <p className={"lead"} style={{ marginBottom: "24px" }}>
            {data.texts.t057}
          </p>
          <div className={"grid2"}>
            <div className={"card"} style={{ border: "2px solid var(--o)" }}>
              <span className={"tagline"}>{data.texts.t058}</span>
              <h3>{data.texts.t059}</h3>
              <p>{data.texts.t060}</p>
              <img
                alt="lop-1-ngay"
                src="/images/lop-1-ngay.jpg"
                style={{
                  borderRadius: "16px",
                }}
              />
              <div className={"price"} style={{ margin: "12px 0 10px" }}>
                {data.texts.t061}
              </div>
              <a className={"btn p"} href={data.links.link007}>
                {data.texts.t062}
              </a>
            </div>
            <div className={"card"}>
              <span className={"tagline"}>{data.texts.t063}</span>
              <h3>{data.texts.t064}</h3>
              <p>{data.texts.t065}</p>
              {/* <img
                src="/images/day-con-247-coaching-1-1.jpg"
                alt="day-con-247-coaching-1-1"
                style={{
                  borderRadius: "16px",
                }}
              /> */}
              <img
                alt="lop-8-tuan"
                src="/images/lop-8-tuan.jpg"
                style={{
                  borderRadius: "16px",
                }}
              />
              <p className={"muted"} style={{ margin: "12px 0 10px" }}>
                <b style={{ color: "var(--ink)", fontSize: "16px" }}>
                  {data.texts.t066}
                </b>
                <br />
                {data.texts.t067}
              </p>
              <a className={"btn p"} href={data.links.link008}>
                {data.texts.t068}
              </a>
            </div>
          </div>
          <div className={"center"} style={{ marginTop: "26px" }}>
            <a className={"btn s"} href={data.links.link009}>
              {data.texts.t069}
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t070}</div>
          <h2>{data.texts.t071}</h2>
          <p className={"lead"} style={{ marginBottom: "24px" }}>
            {data.texts.t072}
          </p>
          {/* <div className={"books"}>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt002} src={data.images.img002} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t073}</span>
                <h3>{data.texts.t074}</h3>
                <p>{data.texts.t075}</p>
                <div className={"price"}>{data.texts.t076}</div>
                <a
                  className={"btn p"}
                  href={data.links.link010}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t077}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt003} src={data.images.img003} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t078}</span>
                <h3>{data.texts.t079}</h3>
                <p>{data.texts.t080}</p>
                <div className={"price"}>{data.texts.t081}</div>
                <a
                  className={"btn p"}
                  href={data.links.link011}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t082}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt004} src={data.images.img004} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t083}</span>
                <h3>{data.texts.t084}</h3>
                <p>{data.texts.t085}</p>
                <div className={"price"}>{data.texts.t086}</div>
                <a
                  className={"btn p"}
                  href={data.links.link012}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t087}
                </a>
              </div>
            </div>
          </div> */}

          <div className="books">
            {featuredBooks.map((book) => (
              <div className={`book ${book.soldOut ? "is-sold-out" : ""}`} key={book.id}>
                <div className="ph">
                  <img src={book.coverUrl} alt={book.alt || book.name} />
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

                  <a
                    type="button"
                    className={`btn p ${book.soldOut ? "sold-out-btn" : ""}`}
                    href={book.soldOut ? undefined : 'https://docs.google.com/forms/d/e/1FAIpQLScCQJEBuiUfjCbUBWEHFuhP5i_kFfQThpzQ3psLKDrBK55iEQ/viewform'}
                    target="_blank"
                    rel="noreferrer"
                    // disabled={book.soldOut}
                    // onClick={() => {
                    //   if (book.soldOut) return;

                    //   setSelectedBook({
                    //     bookId: book.id,
                    //     bookName: book.name,
                    //     price: book.price,
                    //     coverUrl: book.coverUrl,
                    //   });
                    // }}
                  >
                    {book.soldOut ? "Đã bán hết" : "Đặt sách"}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={"center"} style={{ marginTop: "26px" }}>
            <a className={"btn s"} href={data.links.link013}>
              Xem cả {books.length} cuốn →
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>{data.texts.t089}</h2>
          <div style={{ marginTop: "20px" }}>
            <details>
              <summary>{data.texts.t090}</summary>
              <p>{data.texts.t091}</p>
            </details>
            <details>
              <summary>{data.texts.t092}</summary>
              <p>{data.texts.t093}</p>
            </details>
            <details>
              <summary>{data.texts.t094}</summary>
              <p>
                {data.texts.t095}
                <b>{data.texts.t096}</b>
                {data.texts.t097}
              </p>
            </details>
            <details>
              <summary>{data.texts.t098}</summary>
              <p>
                {data.texts.t099}
                <b>{data.texts.t100}</b>
                {data.texts.t101}
                <a href={data.links.link014} target="_blank" rel="noreferrer">
                  {data.texts.t102}
                </a>
                {data.texts.t103}
              </p>
            </details>
            <details>
              <summary>{data.texts.t104}</summary>
              <p>
                {data.texts.t105}
                <b>{data.texts.t106}</b>
                {data.texts.t107}
                <a href={data.links.link015}>{data.texts.t108}</a>
                {data.texts.t109}
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>{data.texts.t110}</h2>
            <p>{data.texts.t111}</p>
            <div className={"btns"}>
              <a
                className={"btn g"}
                href={data.links.link016}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t112}
              </a>
              <a className={"btn s"} href={data.links.link017}>
                {data.texts.t113}
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
