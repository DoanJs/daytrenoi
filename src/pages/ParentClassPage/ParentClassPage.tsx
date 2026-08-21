import { useEffect, useMemo, useState } from "react";
import { BookModel } from "../../models/site";
import { BookOrderForm, SelectedBook } from "../../modules/book-order";
import { getBooks } from "../../services/bookService";
import "./ParentClassPage.css";
import { ParentClassPageData } from "./ParentClassPage.types";

interface Props {
  data: ParentClassPageData;
}

export default function ParentClassPage({ data }: Props) {
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
      <div className={"hero"} style={{ padding: "52px 0 38px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t001}</div>
          <h1 style={{ maxWidth: "19ch" }}>
            {data.texts.t002}
            <br />
            {data.texts.t003}
          </h1>
          <p className={"lead"}>{data.texts.t004}</p>
          <div className={"btns"} style={{ marginTop: "22px" }}>
            <a className={"btn p"} href={data.links.link001}>
              {data.texts.t005}
            </a>
            <a className={"btn s"} href={data.links.link002}>
              {data.texts.t006}
            </a>
          </div>
        </div>
      </div>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "26px" }}>
            <h2>{data.texts.t007}</h2>
            <p className={"lead"}>{data.texts.t008}</p>
          </div>
          <div className={"tier2"}>
            <div className={"prod hero-p"} id={"p1"}>
              <div className={"ptop2"}>
                <span className={"lv2"}>{data.texts.t009}</span>
                <h3>{data.texts.t010}</h3>
                <div className={"sub2"}>{data.texts.t011}</div>
              </div>
              <div className={"pbd2"}>
                <div className={"pricebig"}>
                  {data.texts.t012}
                  <small>{data.texts.t013}</small>
                </div>
                <div className={"forwho"}>
                  <b>{data.texts.t014}</b>
                  {data.texts.t015}
                </div>
                <ul>
                  <li>{data.texts.t016}</li>
                  <li>{data.texts.t017}</li>
                  <li>{data.texts.t018}</li>
                  <li>{data.texts.t019}</li>
                  <li>{data.texts.t020}</li>
                  <li>{data.texts.t021}</li>
                  <li>{data.texts.t022}</li>
                  <li>{data.texts.t023}</li>
                </ul>
                <div className={"takeaway"}>
                  <b>{data.texts.t024}</b>
                  {data.texts.t025}
                </div>
                <a
                  className={"btn p"}
                  href={data.links.link003}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t026}
                </a>
              </div>
            </div>
            <div className={"prod p2"} id={"p2"}>
              <div className={"ptop2"}>
                <span className={"lv2"}>{data.texts.t027}</span>
                <h3>{data.texts.t028}</h3>
                <div className={"sub2"}>{data.texts.t029}</div>
              </div>
              <div className={"pbd2"}>
                <div className={"priceask"}>
                  {data.texts.t030}
                  <small
                    className={"muted"}
                    style={{
                      display: "block",
                      fontWeight: "400",
                      fontSize: "13px",
                      marginTop: "4px",
                    }}
                  >
                    {data.texts.t031}
                  </small>
                </div>
                <div className={"forwho"}>
                  <b>{data.texts.t032}</b>
                  {data.texts.t033}
                </div>
                <ul>
                  <li>
                    <b>{data.texts.t034}</b>
                    {data.texts.t035}
                  </li>
                  <li>
                    <b>{data.texts.t036}</b>
                    {data.texts.t037}
                  </li>
                  <li>{data.texts.t038}</li>
                  <li>
                    <b>{data.texts.t039}</b>
                    {data.texts.t040}
                  </li>
                  <li>
                    <b>{data.texts.t041}</b>
                    {data.texts.t042}
                  </li>
                  <li>
                    {data.texts.t043}
                    <b>{data.texts.t044}</b>
                    {data.texts.t045}
                  </li>
                  <li>{data.texts.t046}</li>
                  <li>{data.texts.t047}</li>
                  <li>
                    {data.texts.t048}
                    <b>{data.texts.t049}</b>
                    {data.texts.t050}
                  </li>
                </ul>
                <div className={"takeaway"}>
                  <b>{data.texts.t051}</b>
                  {data.texts.t052}
                </div>
                <a
                  className={"btn p"}
                  href={data.links.link004}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t053}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>{data.texts.t054}</h2>
          <div className={"ladder"}>
            <div className={"lrow"}>
              <div className={"lnum"}>{data.texts.t055}</div>
              <div>
                <b>{data.texts.t056}</b>
                <p>
                  {data.texts.t057}
                  <a
                    href={data.links.link005}
                    style={{ color: "var(--o-d)", fontWeight: "600" }}
                  >
                    {data.texts.t058}
                  </a>
                  {data.texts.t059}
                </p>
              </div>
            </div>
            <div className={"lrow"}>
              <div className={"lnum"}>{data.texts.t060}</div>
              <div>
                <b>{data.texts.t061}</b>
                <p>
                  <a
                    href={data.links.link006}
                    style={{ color: "var(--o-d)", fontWeight: "600" }}
                  >
                    {data.texts.t062}
                  </a>
                  {data.texts.t063}
                </p>
              </div>
            </div>
            <div className={"lrow"}>
              <div className={"lnum"}>{data.texts.t064}</div>
              <div>
                <b>{data.texts.t065}</b>
                <p>
                  <a
                    href={data.links.link007}
                    style={{ color: "var(--o-d)", fontWeight: "600" }}
                  >
                    {data.texts.t066}
                  </a>
                  {data.texts.t067}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <h2>{data.texts.t068}</h2>
          <p className={"lead"} style={{ marginBottom: "22px" }}>
            {data.texts.t069}
          </p>
          {/* <div className={"books"}>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt001} src={data.images.img001} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t070}</span>
                <h3>{data.texts.t071}</h3>
                <p>{data.texts.t072}</p>
                <div className={"price"}>{data.texts.t073}</div>
                <a
                  className={"btn p"}
                  href={data.links.link008}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t074}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt002} src={data.images.img002} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t075}</span>
                <h3>{data.texts.t076}</h3>
                <p>{data.texts.t077}</p>
                <div className={"price"}>{data.texts.t078}</div>
                <a
                  className={"btn p"}
                  href={data.links.link009}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t079}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt003} src={data.images.img003} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>{data.texts.t080}</span>
                <h3>{data.texts.t081}</h3>
                <p>{data.texts.t082}</p>
                <div className={"price"}>{data.texts.t083}</div>
                <a
                  className={"btn p"}
                  href={data.links.link010}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.texts.t084}
                </a>
              </div>
            </div>
          </div> */}
          <div className="books">
            {featuredBooks.map((book) => (
              <div className="book" key={book.id}>
                <div className="ph">
                  <img src={book.coverUrl} alt={book.alt || book.name} />
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
            ))}
          </div>
          <div className={"center"} style={{ marginTop: "24px" }}>
            <a className={"btn s"} href={data.links.link011}>
              Xem cả {books.length} cuốn →
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>{data.texts.t086}</h2>
          <div style={{ marginTop: "20px" }}>
            <details>
              <summary>{data.texts.t087}</summary>
              <p>{data.texts.t088}</p>
            </details>
            <details>
              <summary>{data.texts.t089}</summary>
              <p>
                {data.texts.t090}
                <b>{data.texts.t091}</b>
                {data.texts.t092}
                <b>{data.texts.t093}</b>
                {data.texts.t094}
              </p>
            </details>
            <details>
              <summary>{data.texts.t095}</summary>
              <p>
                {data.texts.t096}
                <b>{data.texts.t097}</b>
                {data.texts.t098}
              </p>
            </details>
            <details>
              <summary>{data.texts.t099}</summary>
              <p>{data.texts.t100}</p>
            </details>
            <details>
              <summary>{data.texts.t101}</summary>
              <p>
                {data.texts.t102}
                <b>{data.texts.t103}</b>
                {data.texts.t104}
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>{data.texts.t105}</h2>
            <p>{data.texts.t106}</p>
            <div className={"btns"}>
              <a
                className={"btn g"}
                href={data.links.link012}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t107}
              </a>
              <a className={"btn s"} href={data.links.link013}>
                {data.texts.t108}
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
