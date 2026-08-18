import "./ContactPage.css";
import { ContactPageData } from "./ContactPage.types";

interface Props {
  data: ContactPageData;
}

export default function ContactPage({ data }: Props) {
  return (
    <div className={"pg"}>
      <div className={"hero"} style={{ padding: "48px 0 34px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>
            {data.texts.t001}
          </div>
          <h1>
            {data.texts.t002}
          </h1>
          <p className={"lead"}>
            {data.texts.t003}
          </p>
        </div>
      </div>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"grid3"}>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t004}
              </div>
              <b>
                {data.texts.t005}
              </b>
              <p>
                {data.texts.t006}
              </p>
              <a className={"btn g"} href={data.links.link001} target="_blank" rel="noreferrer">
                {data.texts.t007}
              </a>
            </div>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t008}
              </div>
              <b>
                {data.texts.t009}
              </b>
              <p>
                {data.texts.t010}
              </p>
              <a className={"big-num"} href={data.links.link002}>
                {data.texts.t011}
              </a>
            </div>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t012}
              </div>
              <b>
                {data.texts.t013}
              </b>
              <p>
                {data.texts.t014}
              </p>
              <a className={"btn s"} href={data.links.link003} target="_blank" rel="noreferrer">
                {data.texts.t015}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>
            {data.texts.t016}
          </h2>
          <div className={"grid2"} style={{ marginTop: "20px" }}>
            <div className={"card"}>
              <h3>
                {data.texts.t017}
              </h3>
              <ul>
                <li>
                  {data.texts.t018}
                </li>
                <li>
                  {data.texts.t019}
                </li>
                <li>
                  {data.texts.t020}
                </li>
                <li>
                  {data.texts.t021}
                </li>
              </ul>
              <a className={"btn p"} href={data.links.link004} style={{ marginTop: "14px" }} target="_blank" rel="noreferrer">
                {data.texts.t022}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t023}
              </h3>
              <ul>
                <li>
                  {data.texts.t024}
                </li>
                <li>
                  {data.texts.t025}
                </li>
                <li>
                  {data.texts.t026}
                </li>
                <li>
                  {data.texts.t027}
                </li>
              </ul>
              <a className={"btn p"} href={data.links.link005} style={{ marginTop: "14px" }} target="_blank" rel="noreferrer">
                {data.texts.t028}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"grid3"}>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t029}
              </div>
              <b>
                {data.texts.t030}
              </b>
              <p>
                {data.texts.t031}
              </p>
            </div>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t032}
              </div>
              <b>
                {data.texts.t033}
              </b>
              <p>
                {data.texts.t034}
              </p>
            </div>
            <div className={"cbox"}>
              <div className={"ic"}>
                {data.texts.t035}
              </div>
              <b>
                {data.texts.t036}
              </b>
              <p>
                {data.texts.t037}
                <br />
                {data.texts.t038}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
