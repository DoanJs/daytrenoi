import "./BooksPage.css";
import { BooksPageData } from "./BooksPage.types";

interface Props {
  data: BooksPageData;
}

export default function BooksPage({ data }: Props) {
  return (
    <div className={"pg"}>
      <div className={"hero"} style={{ padding: "48px 0 34px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>
            {data.texts.t001}
          </div>
          <h1 style={{ maxWidth: "18ch" }}>
            {data.texts.t002}
            <br />
            {data.texts.t003}
          </h1>
          <p className={"lead"}>
            {data.texts.t004}
          </p>
        </div>
      </div>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"books"}>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt001} src={data.images.img001} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t005}
                </span>
                <h3>
                  {data.texts.t006}
                </h3>
                <p>
                  {data.texts.t007}
                </p>
                <div className={"price"}>
                  {data.texts.t008}
                </div>
                <a className={"btn p"} href={data.links.link001} target="_blank" rel="noreferrer">
                  {data.texts.t009}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt002} src={data.images.img002} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t010}
                </span>
                <h3>
                  {data.texts.t011}
                </h3>
                <p>
                  {data.texts.t012}
                </p>
                <div className={"price"}>
                  {data.texts.t013}
                </div>
                <a className={"btn p"} href={data.links.link002} target="_blank" rel="noreferrer">
                  {data.texts.t014}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt003} src={data.images.img003} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t015}
                </span>
                <h3>
                  {data.texts.t016}
                </h3>
                <p>
                  {data.texts.t017}
                </p>
                <div className={"price"}>
                  {data.texts.t018}
                </div>
                <a className={"btn p"} href={data.links.link003} target="_blank" rel="noreferrer">
                  {data.texts.t019}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt004} src={data.images.img004} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t020}
                </span>
                <h3>
                  {data.texts.t021}
                </h3>
                <p>
                  {data.texts.t022}
                </p>
                <div className={"price"}>
                  {data.texts.t023}
                </div>
                <a className={"btn p"} href={data.links.link004} target="_blank" rel="noreferrer">
                  {data.texts.t024}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt005} src={data.images.img005} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t025}
                </span>
                <h3>
                  {data.texts.t026}
                </h3>
                <p>
                  {data.texts.t027}
                </p>
                <div className={"price"}>
                  {data.texts.t028}
                </div>
                <a className={"btn p"} href={data.links.link005} target="_blank" rel="noreferrer">
                  {data.texts.t029}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt006} src={data.images.img006} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t030}
                </span>
                <h3>
                  {data.texts.t031}
                </h3>
                <p>
                  {data.texts.t032}
                </p>
                <div className={"price"}>
                  {data.texts.t033}
                </div>
                <a className={"btn p"} href={data.links.link006} target="_blank" rel="noreferrer">
                  {data.texts.t034}
                </a>
              </div>
            </div>
            <div className={"book"}>
              <div className={"ph"}>
                <img alt={data.alts.alt007} src={data.images.img007} />
              </div>
              <div className={"bd"}>
                <span className={"tagline"}>
                  {data.texts.t035}
                </span>
                <h3>
                  {data.texts.t036}
                </h3>
                <p>
                  {data.texts.t037}
                </p>
                <div className={"price"}>
                  {data.texts.t038}
                </div>
                <a className={"btn p"} href={data.links.link007} target="_blank" rel="noreferrer">
                  {data.texts.t039}
                </a>
              </div>
            </div>
          </div>
          <p className={"muted"} style={{ marginTop: "20px" }}>
            {data.texts.t040}
            <b>
              {data.texts.t041}
            </b>
            {data.texts.t042}
          </p>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>
            {data.texts.t043}
          </h2>
          <div className={"grid2"} style={{ marginTop: "20px", alignItems: "start" }}>
            <div style={{ display: "grid", gap: "12px" }}>
              <img alt={data.alts.alt008} src={data.images.img008} style={{ borderRadius: "14px", boxShadow: "0 10px 26px rgba(36,28,22,.13)" }} />
              <img alt={data.alts.alt009} src={data.images.img009} style={{ borderRadius: "14px", boxShadow: "0 10px 26px rgba(36,28,22,.13)" }} />
              <img alt={data.alts.alt010} src={data.images.img010} style={{ borderRadius: "14px", boxShadow: "0 10px 26px rgba(36,28,22,.13)" }} />
            </div>
            <div className={"card"}>
              <span className={"tagline pro"}>
                {data.texts.t044}
              </span>
              <h3>
                {data.texts.t045}
              </h3>
              <p>
                {data.texts.t046}
              </p>
              <p className={"muted"} style={{ marginTop: "12px" }}>
                {data.texts.t047}
              </p>
              <a className={"btn s"} href={data.links.link008} style={{ marginTop: "12px" }}>
                {data.texts.t048}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <h2>
            {data.texts.t049}
          </h2>
          <div className={"grid3"} style={{ marginTop: "20px" }}>
            <div className={"card"}>
              <h3>
                {data.texts.t050}
              </h3>
              <p>
                {data.texts.t051}
                <b>
                  {data.texts.t052}
                </b>
                {data.texts.t053}
                <b>
                  {data.texts.t054}
                </b>
                {data.texts.t055}
              </p>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t056}
              </h3>
              <p>
                <b>
                  {data.texts.t057}
                </b>
                {data.texts.t058}
                <b>
                  {data.texts.t059}
                </b>
                {data.texts.t060}
              </p>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t061}
              </h3>
              <p>
                <b>
                  {data.texts.t062}
                </b>
                {data.texts.t063}
              </p>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t064}
              </h3>
              <p>
                <b>
                  {data.texts.t065}
                </b>
                {data.texts.t066}
                <b>
                  {data.texts.t067}
                </b>
                {data.texts.t068}
              </p>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t069}
              </h3>
              <p>
                {data.texts.t070}
                <a href={data.links.link009}>
                  {data.texts.t071}
                </a>
                {data.texts.t072}
              </p>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t073}
              </h3>
              <p>
                <b>
                  {data.texts.t074}
                </b>
                {data.texts.t075}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>
              {data.texts.t076}
            </h2>
            <p>
              {data.texts.t077}
            </p>
            <div className={"btns"}>
              <a className={"btn g"} href={data.links.link010} target="_blank" rel="noreferrer">
                {data.texts.t078}
              </a>
              <a className={"btn s"} href={data.links.link011}>
                {data.texts.t079}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
