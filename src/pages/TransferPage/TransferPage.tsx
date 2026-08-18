import "./TransferPage.css";
import { TransferPageData } from "./TransferPage.types";

interface Props {
  data: TransferPageData;
}

export default function TransferPage({ data }: Props) {
  return (
    <div className={"pg"}>
      <div className={"hero"} style={{ padding: "52px 0 38px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>
            {data.texts.t001}
          </div>
          <h1 style={{ maxWidth: "20ch" }}>
            {data.texts.t002}
            <br />
            {data.texts.t003}
          </h1>
          <p className={"lead"}>
            {data.texts.t004}
          </p>
          <div className={"btns"} style={{ marginTop: "22px" }}>
            <a className={"btn p"} href={data.links.link001} target="_blank" rel="noreferrer">
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
            <h2>
              {data.texts.t007}
            </h2>
            <p className={"lead"}>
              {data.texts.t008}
            </p>
          </div>
          <div className={"grid2"}>
            <div className={"card"} style={{ borderLeft: "3px solid var(--o)" }}>
              <div style={{ fontSize: "25px", marginBottom: "9px" }}>
                {data.texts.t009}
              </div>
              <h3>
                {data.texts.t010}
              </h3>
              <p>
                {data.texts.t011}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t012}
                  <b>
                    {data.texts.t013}
                  </b>
                  {data.texts.t014}
                </li>
                <li>
                  {data.texts.t015}
                  <b>
                    {data.texts.t016}
                  </b>
                  {data.texts.t017}
                </li>
                <li>
                  {data.texts.t018}
                  <b>
                    {data.texts.t019}
                  </b>
                  {data.texts.t020}
                </li>
                <li>
                  {data.texts.t021}
                  <b>
                    {data.texts.t022}
                  </b>
                  {data.texts.t023}
                </li>
              </ul>
              <p className={"muted"} style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px dotted var(--line)" }}>
                <b style={{ color: "var(--ink)" }}>
                  {data.texts.t024}
                </b>
                {data.texts.t025}
              </p>
            </div>
            <div className={"card"} style={{ borderLeft: "3px solid var(--o)" }}>
              <div style={{ fontSize: "25px", marginBottom: "9px" }}>
                {data.texts.t026}
              </div>
              <h3>
                {data.texts.t027}
              </h3>
              <p>
                {data.texts.t028}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t029}
                </li>
                <li>
                  {data.texts.t030}
                </li>
                <li>
                  {data.texts.t031}
                </li>
                <li>
                  {data.texts.t032}
                </li>
              </ul>
              <p className={"muted"} style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px dotted var(--line)" }}>
                <b style={{ color: "var(--ink)" }}>
                  {data.texts.t033}
                </b>
                {data.texts.t034}
              </p>
            </div>
            <div className={"card"} style={{ borderLeft: "3px solid var(--o)" }}>
              <div style={{ fontSize: "25px", marginBottom: "9px" }}>
                {data.texts.t035}
              </div>
              <h3>
                {data.texts.t036}
              </h3>
              <p>
                {data.texts.t037}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t038}
                </li>
                <li>
                  {data.texts.t039}
                </li>
                <li>
                  {data.texts.t040}
                </li>
              </ul>
              <p className={"muted"} style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px dotted var(--line)" }}>
                <b style={{ color: "var(--ink)" }}>
                  {data.texts.t041}
                </b>
                {data.texts.t042}
              </p>
            </div>
            <div className={"card"} style={{ borderLeft: "3px solid var(--o)" }}>
              <div style={{ fontSize: "25px", marginBottom: "9px" }}>
                {data.texts.t043}
              </div>
              <h3>
                {data.texts.t044}
              </h3>
              <p>
                {data.texts.t045}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t046}
                </li>
                <li>
                  {data.texts.t047}
                </li>
                <li>
                  {data.texts.t048}
                </li>
                <li>
                  {data.texts.t049}
                </li>
              </ul>
              <p className={"muted"} style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px dotted var(--line)" }}>
                <b style={{ color: "var(--ink)" }}>
                  {data.texts.t050}
                </b>
                {data.texts.t051}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>
            {data.texts.t052}
          </h2>
          <div className={"grid2"} style={{ marginTop: "20px" }}>
            <div className={"card"}>
              <h3>
                {data.texts.t053}
              </h3>
              <p>
                {data.texts.t054}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t055}
                  <b>
                    {data.texts.t056}
                  </b>
                  {data.texts.t057}
                </li>
                <li>
                  {data.texts.t058}
                  <b>
                    {data.texts.t059}
                  </b>
                  {data.texts.t060}
                </li>
                <li>
                  {data.texts.t061}
                </li>
              </ul>
              <a className={"btn s"} href={data.links.link003} style={{ marginTop: "14px" }} target="_blank" rel="noreferrer">
                {data.texts.t062}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t063}
              </h3>
              <p>
                {data.texts.t064}
              </p>
              <ul style={{ marginTop: "11px" }}>
                <li>
                  {data.texts.t065}
                </li>
                <li>
                  {data.texts.t066}
                </li>
                <li>
                  {data.texts.t067}
                </li>
                <li>
                  {data.texts.t068}
                </li>
              </ul>
              <a className={"btn s"} href={data.links.link004} style={{ marginTop: "14px" }} target="_blank" rel="noreferrer">
                {data.texts.t069}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <h2>
            {data.texts.t070}
          </h2>
          <div className={"steps"} style={{ marginTop: "20px" }}>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>
                  {data.texts.t071}
                </h3>
                <p>
                  {data.texts.t072}
                </p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>
                  {data.texts.t073}
                </h3>
                <p>
                  {data.texts.t074}
                </p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>
                  {data.texts.t075}
                </h3>
                <p>
                  {data.texts.t076}
                </p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>
                  {data.texts.t077}
                </h3>
                <p>
                  {data.texts.t078}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <h2>
            {data.texts.t079}
          </h2>
          <div style={{ marginTop: "20px" }}>
            <details>
              <summary>
                {data.texts.t080}
              </summary>
              <p>
                {data.texts.t081}
              </p>
            </details>
            <details>
              <summary>
                {data.texts.t082}
              </summary>
              <p>
                {data.texts.t083}
              </p>
            </details>
            <details>
              <summary>
                {data.texts.t084}
              </summary>
              <p>
                {data.texts.t085}
              </p>
            </details>
            <details>
              <summary>
                {data.texts.t086}
              </summary>
              <p>
                {data.texts.t087}
                <b>
                  {data.texts.t088}
                </b>
                {data.texts.t089}
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>
              {data.texts.t090}
            </h2>
            <p>
              {data.texts.t091}
            </p>
            <div className={"btns"}>
              <a className={"btn g"} href={data.links.link005} target="_blank" rel="noreferrer">
                {data.texts.t092}
              </a>
              <a className={"btn s"} href={data.links.link006}>
                {data.texts.t093}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
