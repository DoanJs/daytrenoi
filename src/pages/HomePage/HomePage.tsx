import "./HomePage.css";
import { HomePageData } from "./HomePage.types";
import QuickTest from "../../components/QuickTest/QuickTest";
import { QuickTestData } from "../../components/QuickTest/QuickTest.types";

interface Props {
  data: HomePageData;
  quickTestData: QuickTestData;
}

export default function HomePage({ data, quickTestData }: Props) {
  return (
    <div className={"pg"}>
      <div className={"hero"}>
        <div className={"wrap"}>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>
                {data.texts.t001}
              </div>
              <h1>
                {data.texts.t002}
                <br />
                {data.texts.t003}
              </h1>
              <p className={"lead"}>
                {data.texts.t004}
                <b>
                  {data.texts.t005}
                </b>
                {data.texts.t006}
                <b>
                  {data.texts.t007}
                </b>
                {data.texts.t008}
              </p>
              <div className={"btns"} style={{ marginTop: "22px" }}>
                <a className={"btn p"} href={data.links.link001}>
                  {data.texts.t009}
                </a>
                <a className={"btn p"} href={data.links.link002} style={{ background: "var(--ink)" }}>
                  {data.texts.t010}
                </a>
                <a className={"btn s"} href={data.links.link003}>
                  {data.texts.t011}
                </a>
              </div>
              <div className={"stats"}>
                <div className={"stat"}>
                  <b>
                    {data.texts.t012}
                  </b>
                  <span>
                    {data.texts.t013}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t014}
                  </b>
                  <span>
                    {data.texts.t015}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t016}
                  </b>
                  <span>
                    {data.texts.t017}
                  </span>
                </div>
                <div className={"stat"}>
                  <b>
                    {data.texts.t018}
                  </b>
                  <span>
                    {data.texts.t019}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img alt={data.alts.alt001} src={data.images.img001} style={{ borderRadius: "14px", boxShadow: "0 16px 44px rgba(36,28,22,.15)" }} />
              <p className={"muted center"} style={{ marginTop: "12px" }}>
                {data.texts.t020}
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuickTest data={quickTestData} />
      <section>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "30px" }}>
            <div className={"eyebrow"}>
              {data.texts.t021}
            </div>
            <h2>
              {data.texts.t022}
            </h2>
            <p className={"lead"}>
              {data.texts.t023}
            </p>
          </div>
          <div className={"doors"}>
            <a className={"door"} href={data.links.link004}>
              <div className={"ic"}>
                {data.texts.t024}
              </div>
              <h3>
                {data.texts.t025}
              </h3>
              <p>
                {data.texts.t026}
              </p>
              <ul>
                <li>
                  {data.texts.t027}
                </li>
                <li>
                  {data.texts.t028}
                </li>
                <li>
                  {data.texts.t029}
                </li>
                <li>
                  {data.texts.t030}
                </li>
              </ul>
              <div className={"go"}>
                {data.texts.t031}
              </div>
            </a>
            <a className={"door"} href={data.links.link005}>
              <div className={"ic"}>
                {data.texts.t032}
              </div>
              <h3>
                {data.texts.t033}
              </h3>
              <p>
                {data.texts.t034}
              </p>
              <ul>
                <li>
                  {data.texts.t035}
                </li>
                <li>
                  {data.texts.t036}
                </li>
                <li>
                  {data.texts.t037}
                </li>
                <li>
                  {data.texts.t038}
                </li>
              </ul>
              <div className={"go"}>
                {data.texts.t039}
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "6px" }}>
            <div className={"eyebrow"}>
              {data.texts.t040}
            </div>
            <h2>
              {data.texts.t041}
            </h2>
            <p className={"lead"}>
              {data.texts.t042}
            </p>
          </div>
          <div className={"thap"}>
            <div className={"tpanel"}>
              <div className={"h"} style={{ background: "var(--c-cm)" }}>
                {data.texts.t043}
              </div>
              <div className={"b"}>
                <a className={"it"} href={data.links.link006}>
                  <b>
                    {data.texts.t044}
                  </b>
                  <em>
                    {data.texts.t045}
                  </em>
                  <span className={"pr"}>
                    {data.texts.t046}
                  </span>
                </a>
                <a className={"it"} href={data.links.link007}>
                  <b>
                    {data.texts.t047}
                  </b>
                  <em>
                    {data.texts.t048}
                    <br />
                    {data.texts.t049}
                  </em>
                </a>
                <div className={"note"}>
                  {data.texts.t050}
                  <b>
                    {data.texts.t051}
                  </b>
                  {data.texts.t052}
                </div>
              </div>
            </div>
            <div className={"thap-mid"}>
              <div className={"trow"}>
                <a className={"tb p5"} href={data.links.link008}>
                  <span className={"n"}>
                    {data.texts.t053}
                  </span>
                  <b>
                    {data.texts.t054}
                  </b>
                  <span className={"d"}>
                    {data.texts.t055}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t056}
                    </span>
                    <span>
                      {data.texts.t057}
                    </span>
                    <span>
                      {data.texts.t058}
                    </span>
                    <span>
                      {data.texts.t059}
                    </span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t060}
                <b>
                  {data.texts.t061}
                </b>
                {data.texts.t062}
                <b>
                  {data.texts.t063}
                </b>
              </div>
              <div className={"trow"}>
                <a className={"tb p4a"} href={data.links.link009}>
                  <span className={"n"}>
                    {data.texts.t064}
                  </span>
                  <b>
                    {data.texts.t065}
                  </b>
                  <span className={"d"}>
                    {data.texts.t066}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t067}
                    </span>
                    <span>
                      {data.texts.t068}
                    </span>
                    <span>
                      {data.texts.t069}
                    </span>
                  </span>
                </a>
                <a className={"tb p4b"} href={data.links.link010}>
                  <span className={"n"}>
                    {data.texts.t070}
                  </span>
                  <b>
                    {data.texts.t071}
                  </b>
                  <span className={"d"}>
                    {data.texts.t072}
                  </span>
                  <span className={"chips"}>
                    <span>
                      {data.texts.t073}
                    </span>
                    <span>
                      {data.texts.t074}
                    </span>
                    <span>
                      {data.texts.t075}
                    </span>
                    <span>
                      {data.texts.t076}
                    </span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t077}
                <b>
                  {data.texts.t078}
                </b>
              </div>
              <div className={"trow"}>
                <a className={"tb p3"} href={data.links.link011}>
                  <span className={"n"}>
                    {data.texts.t079}
                  </span>
                  <b>
                    {data.texts.t080}
                  </b>
                  <span className={"d"}>
                    {data.texts.t081}
                  </span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p2"} href={data.links.link012}>
                  <span className={"n"}>
                    {data.texts.t082}
                  </span>
                  <b>
                    {data.texts.t083}
                  </b>
                  <span className={"d"}>
                    {data.texts.t084}
                  </span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p1"} href={data.links.link013}>
                  <span className={"n"}>
                    {data.texts.t085}
                  </span>
                  <b>
                    {data.texts.t086}
                  </b>
                  <span className={"d"}>
                    {data.texts.t087}
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className={"tpanel"}>
                <div className={"h"} style={{ background: "var(--ink)" }}>
                  {data.texts.t088}
                </div>
                <div className={"b"}>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t089}
                    </div>
                    <b>
                      {data.texts.t090}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t091}
                    </div>
                    <b>
                      {data.texts.t092}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t093}
                    </div>
                    <b>
                      {data.texts.t094}
                    </b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>
                      {data.texts.t095}
                    </div>
                    <b>
                      {data.texts.t096}
                    </b>
                  </div>
                  <div className={"bdg gold"}>
                    <div className={"t"}>
                      {data.texts.t097}
                    </div>
                    <b>
                      {data.texts.t098}
                    </b>
                  </div>
                </div>
              </div>
              <div className={"tpanel"} style={{ marginTop: "13px" }}>
                <div className={"h"} style={{ background: "var(--o)" }}>
                  {data.texts.t099}
                </div>
                <div className={"b"}>
                  <div className={"note"} style={{ border: "none", paddingTop: "0" }}>
                    {data.texts.t100}
                  </div>
                  <a className={"btn s"} href={data.links.link014} style={{ marginTop: "10px", width: "100%", justifyContent: "center", fontSize: "13.5px" }}>
                    {data.texts.t101}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"grid-photo"} style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "34px", alignItems: "center", marginBottom: "34px" }}>
            <div>
              <img alt={data.alts.alt002} className={"photo"} src={data.images.img002} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
              <p className={"photo-cap"}>
                {data.texts.t102}
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: "10px" }}>
                {data.texts.t103}
              </h2>
              <p className={"lead"}>
                {data.texts.t104}
              </p>
            </div>
          </div>
          <div className={"grid3"}>
            <div className={"card"}>
              <h3>
                {data.texts.t105}
              </h3>
              <p>
                {data.texts.t106}
              </p>
              <a className={"btn s"} href={data.links.link015} style={{ marginTop: "6px" }}>
                {data.texts.t107}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t108}
              </h3>
              <p>
                {data.texts.t109}
              </p>
              <a className={"btn s"} href={data.links.link016} style={{ marginTop: "6px" }}>
                {data.texts.t110}
              </a>
            </div>
            <div className={"card"}>
              <h3>
                {data.texts.t111}
              </h3>
              <p>
                {data.texts.t112}
              </p>
              <a className={"btn s"} href={data.links.link017} style={{ marginTop: "6px" }}>
                {data.texts.t113}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"author"}>
            <img alt={data.alts.alt003} className={"av-img"} src={data.images.img003} />
            <div>
              <div className={"eyebrow"}>
                {data.texts.t114}
              </div>
              <h2 style={{ marginBottom: "12px" }}>
                {data.texts.t115}
              </h2>
              <p>
                {data.texts.t116}
                <b>
                  {data.texts.t117}
                </b>
                {data.texts.t118}
              </p>
              <ul className={"check"} style={{ marginTop: "14px" }}>
                <li>
                  {data.texts.t119}
                  <b>
                    {data.texts.t120}
                  </b>
                </li>
                <li>
                  <b>
                    {data.texts.t121}
                  </b>
                  {data.texts.t122}
                  <b>
                    {data.texts.t123}
                  </b>
                  {data.texts.t124}
                  <b>
                    {data.texts.t125}
                  </b>
                  {data.texts.t126}
                </li>
                <li>
                  {data.texts.t127}
                  <b>
                    {data.texts.t128}
                  </b>
                  {data.texts.t129}
                </li>
                <li>
                  {data.texts.t130}
                  <b>
                    {data.texts.t131}
                  </b>
                  {data.texts.t132}
                  <b>
                    {data.texts.t133}
                  </b>
                  {data.texts.t134}
                  <b>
                    {data.texts.t135}
                  </b>
                  {data.texts.t136}
                </li>
                <li>
                  {data.texts.t137}
                  <b>
                    {data.texts.t138}
                  </b>
                  {data.texts.t139}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>
              {data.texts.t140}
            </h2>
            <p>
              {data.texts.t141}
            </p>
            <div className={"btns"}>
              <a className={"btn g"} href={data.links.link018} target="_blank" rel="noreferrer">
                {data.texts.t142}
              </a>
              <a className={"btn s"} href={data.links.link019}>
                {data.texts.t143}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
