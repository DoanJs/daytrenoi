import "./TrainingPage.css";
import { TrainingPageData } from "./TrainingPage.types";
import "./TrainingPage.css";

import { CourseEnrollmentButton } from "../../modules/course-enrollment";
import { useState } from "react";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { addCourse } from "../../services/courseService";
const coursesDemo = [
  {
    id: "ancs-1",
    title: "May đo & Lượng giá",
    schedule: "15–16/09/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "05/09/2026",
    registerUrl: "https://example.com/dang-ky/ancs-1",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 1,
  },

  {
    id: "ancs-2",
    title: "Trị liệu giao tiếp",
    schedule: "20–21/09/2026",
    location: "Hà Nội",
    tuitionFee: 4000000,
    earlyBirdFee: 3700000,
    earlyBirdDeadline: "10/09/2026",
    registerUrl: "https://example.com/dang-ky/ancs-2",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 2,
  },

  {
    id: "ancs-3",
    title: "Chuyên sâu — May đo chương trình trị liệu âm ngữ phức hợp",
    schedule: "27–28/09/2026",
    location: "Hà Nội",
    tuitionFee: 4500000,
    earlyBirdFee: 4200000,
    earlyBirdDeadline: "15/09/2026",
    registerUrl: "https://example.com/dang-ky/ancs-3",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Lớp chuyên sâu, số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 3,
  },

  {
    id: "choi-1",
    title: "Chơi lớn — Đọc được cuộc chơi",
    schedule: "04–05/10/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "20/09/2026",
    registerUrl: "https://example.com/dang-ky/choi-1",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 4,
  },

  {
    id: "choi-2",
    title: "Nói chơi — Chơi để trẻ hay nói",
    schedule: "11–12/10/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "27/09/2026",
    registerUrl: "https://example.com/dang-ky/choi-2",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 5,
  },

  {
    id: "choi-3",
    title: "Chơi cùng giác quan — Giác quan, hành vi, ngôn ngữ",
    schedule: "18–19/10/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "04/10/2026",
    registerUrl: "https://example.com/dang-ky/choi-3",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 6,
  },

  {
    id: "mxlh-1",
    title: "Cấu âm — Xác định đúng lỗi & huấn luyện",
    schedule: "25–26/10/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "10/10/2026",
    registerUrl: "https://example.com/dang-ky/mxlh-1",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành phát âm đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 7,
  },

  {
    id: "mxlh-2",
    title: "Âm vị — Cài đặt lại hệ thống",
    schedule: "01–02/11/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "18/10/2026",
    registerUrl: "https://example.com/dang-ky/mxlh-2",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành phát âm đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 8,
  },

  {
    id: "mxlh-3",
    title: "Bàn tay kì diệu — Bản đồ giải phẫu phát âm",
    schedule: "08–09/11/2026",
    location: "Hà Nội",
    tuitionFee: 3500000,
    earlyBirdFee: 3200000,
    earlyBirdDeadline: "25/10/2026",
    registerUrl: "https://example.com/dang-ky/mxlh-3",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành phát âm đi kèm",
    note: "Số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 9,
  },

  {
    id: "mxlh-4",
    title: "Trẻ nói khó và đồng mắc — Kích âm nâng cao",
    schedule: "15–16/11/2026",
    location: "Hà Nội",
    tuitionFee: 4000000,
    earlyBirdFee: 3700000,
    earlyBirdDeadline: "01/11/2026",
    registerUrl: "https://example.com/dang-ky/mxlh-4",
    giftsRemaining: 5,
    giftDescription: "Bộ tài liệu thực hành phát âm đi kèm",
    note: "Lớp nâng cao, số lượng học viên có giới hạn.",
    isActive: true,
    sortOrder: 10,
  },
];

interface Props {
  data: TrainingPageData;
}

export default function TrainingPage({ data }: Props) {
  const [isLoadingCourse, setIsLoadingCourse] = useState(false);
  // const handleAdd = async () => {

  //   const promises = coursesDemo.map((item, index) => {
  //     addCourse({
  //       ...item,
  //       courseId: item.id
  //     })
  //   })

  //   await Promise.all(promises)

  //   console.log('completed')
  // }
  return (
    <div className={"pg"}>
      {/* <button onClick={handleAdd}>ADD</button> */}
      <div className={"hero"} style={{ padding: "44px 0 26px" }}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t001}</div>
          <h1 style={{ maxWidth: "20ch" }}>{data.texts.t002}</h1>
          <p className={"lead"}>
            {data.texts.t003}
            <b>{data.texts.t004}</b>
            {data.texts.t005}
          </p>
        </div>
      </div>
      <section className={"tight"} style={{ paddingTop: "14px" }}>
        <div className={"wrap"}>
          <div className={"thap"}>
            <div className={"tpanel"}>
              {/* <div className={"h"} style={{ background: "var(--c-cm)" }}>
                {data.texts.t006}
              </div> */}
              {/* <div className={"b"}>
                <a className={"it"} href={data.links.link001}>
                  <b>{data.texts.t007}</b>
                  <em>{data.texts.t008}</em>
                  <span className={"pr"}>{data.texts.t009}</span>
                </a>
                <a className={"it"} href={data.links.link002}>
                  <b>{data.texts.t010}</b>
                  <em>
                    {data.texts.t011}
                    <br />
                    {data.texts.t012}
                  </em>
                </a>
                <div className={"note"}>
                  {data.texts.t013}
                  <b>{data.texts.t014}</b>
                  {data.texts.t015}
                </div>
              </div> */}
            </div>
            <div className={"thap-mid"}>
              <div className={"trow"}>
                <a className={"tb p5"} href={data.links.link003} 
                  style={{
                    background: "#086AFB",
                    borderColor: "#086AFB",
                  }}>
                  <span className={"n"}>{data.texts.t016}</span>
                  <b>{data.texts.t017}</b>
                  <span className={"d"}>{data.texts.t018}</span>
                  <span className={"chips"}>
                    <span>{data.texts.t019}</span>
                    <span>{data.texts.t020}</span>
                    <span>{data.texts.t021}</span>
                    <span>{data.texts.t022}</span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t023}
                <b>{data.texts.t024}</b>
                {data.texts.t025}
                <b>{data.texts.t026}</b>
              </div>
              <div className={"trow"}>
                <a className={"tb p4a"} href={data.links.link004} 
                  style={{
                    background: "#F36189",
                    borderColor: "#F36189",
                  }}>
                  <span className={"n"}>{data.texts.t027}</span>
                  <b>{data.texts.t028}</b>
                  <span className={"d"}>{data.texts.t029}</span>
                  <span className={"chips"}>
                    <span>{data.texts.t030}</span>
                    <span>{data.texts.t031}</span>
                    <span>{data.texts.t032}</span>
                  </span>
                </a>
                <a className={"tb p4b"} href={data.links.link005}  style={{
                    background: "#2B9879",
                    borderColor: "#2B9879",
                  }}>
                  <span className={"n"}>{data.texts.t033}</span>
                  <b>{data.texts.t034}</b>
                  <span className={"d"}>{data.texts.t035}</span>
                  <span className={"chips"}>
                    <span>{data.texts.t036}</span>
                    <span>{data.texts.t037}</span>
                    <span>{data.texts.t038}</span>
                    <span>{data.texts.t039}</span>
                  </span>
                </a>
              </div>
              <div className={"gate"}>
                {data.texts.t040}
                <b>{data.texts.t041}</b>
              </div>
              <div className={"trow"}>
                <a className={"tb p3"} href={data.links.link006}>
                  <span className={"n"}>{data.texts.t042}</span>
                  <b>{data.texts.t043}</b>
                  <span className={"d"}>{data.texts.t044}</span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p2"} href={data.links.link007}>
                  <span className={"n"}>{data.texts.t045}</span>
                  <b>{data.texts.t046}</b>
                  <span className={"d"}>{data.texts.t047}</span>
                </a>
              </div>
              <div className={"trow"}>
                <a className={"tb p1"} href={data.links.link008}>
                  <span className={"n"}>{data.texts.t048}</span>
                  <b>{data.texts.t049}</b>
                  <span className={"d"}>{data.texts.t050}</span>
                </a>
              </div>
            </div>
            <div>
              <div className={"tpanel"}>
                <div className={"h"} style={{ background: "var(--ink)" }}>
                  {data.texts.t051}
                </div>
                <div className={"b"}>
                  <div className={"bdg"}>
                    <div className={"t"}>{data.texts.t052}</div>
                    <b>{data.texts.t053}</b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>{data.texts.t054}</div>
                    <b>{data.texts.t055}</b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>{data.texts.t056}</div>
                    <b>{data.texts.t057}</b>
                  </div>
                  <div className={"bdg"}>
                    <div className={"t"}>{data.texts.t058}</div>
                    <b>{data.texts.t059}</b>
                  </div>
                  <div className={"bdg gold"}>
                    <div className={"t"}>{data.texts.t060}</div>
                    <b>{data.texts.t061}</b>
                  </div>
                </div>
              </div>
              <div className={"tpanel"} style={{ marginTop: "13px" }}>
                <div className={"h"} style={{ background: "var(--o)" }}>
                  {data.texts.t062}
                </div>
                <div className={"b"}>
                  <div
                    className={"note"}
                    style={{ border: "none", paddingTop: "0" }}
                  >
                    {data.texts.t063}
                  </div>
                  <a
                    className={"btn s"}
                    href={data.links.link009}
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "13.5px",
                    }}
                  >
                    {data.texts.t064}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={"center"} style={{ marginTop: "26px" }}>
            <a className={"btn p"} href={data.links.link010}>
              {data.texts.t065}
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"center"} style={{ marginBottom: "24px" }}>
            <div className={"eyebrow"}>{data.texts.t066}</div>
            <h2>{data.texts.t067}</h2>
            <p className={"lead"}>{data.texts.t068}</p>
          </div>
          <div className={"grid3"}>
            <a className={"pain"} href={data.links.link011}>
              <p className={"q"}>{data.texts.t069}</p>
              <div className={"ans"}>
                <b>{data.texts.t070}</b>
                <span>{data.texts.t071}</span>
              </div>
              <div className={"go"}>{data.texts.t072}</div>
            </a>
            <a className={"pain"} href={data.links.link012}>
              <p className={"q"}>{data.texts.t073}</p>
              <div className={"ans"}>
                <b>{data.texts.t074}</b>
                <span>{data.texts.t075}</span>
              </div>
              <div className={"go"}>{data.texts.t076}</div>
            </a>
            <a className={"pain"} href={data.links.link013}>
              <p className={"q"}>{data.texts.t077}</p>
              <div className={"ans"}>
                <b>{data.texts.t078}</b>
                <span>{data.texts.t079}</span>
              </div>
              <div className={"go"}>{data.texts.t080}</div>
            </a>
            <a className={"pain"} href={data.links.link014}>
              <p className={"q"}>{data.texts.t081}</p>
              <div className={"ans"}>
                <b>{data.texts.t082}</b>
                <span>{data.texts.t083}</span>
              </div>
              <div className={"go"}>{data.texts.t084}</div>
            </a>
            <a className={"pain"} href={data.links.link015}>
              <p className={"q"}>{data.texts.t085}</p>
              <div className={"ans"}>
                <b>{data.texts.t086}</b>
                <span>{data.texts.t087}</span>
              </div>
              <div className={"go"}>{data.texts.t088}</div>
            </a>
            <a className={"pain"} href={data.links.link016}>
              <p className={"q"}>{data.texts.t089}</p>
              <div className={"ans"}>
                <b>{data.texts.t090}</b>
                <span>{data.texts.t091}</span>
              </div>
              <div className={"go"}>{data.texts.t092}</div>
            </a>
          </div>
          <p className={"muted center"} style={{ marginTop: "20px" }}>
            {data.texts.t093}
            <b>{data.texts.t094}</b>
            {data.texts.t095}
          </p>
        </div>
      </section>
      <section className={"tight"} id={"chi-tiet"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t096}</div>
          <h2 style={{ marginBottom: "18px" }}>{data.texts.t097}</h2>
          <div className={"filter"} id={"filter"}>
            <button className={"fbtn on"} data-f={"all"}>
              {data.texts.t098}
            </button>
            <button className={"fbtn"} data-f={"ancs"}>
              {data.texts.t099}
            </button>
            <button className={"fbtn"} data-f={"choi"}>
              {data.texts.t100}
            </button>
            <button className={"fbtn"} data-f={"mxlh"}>
              {data.texts.t101}
            </button>
          </div>
          <div className={"note"} style={{ marginTop: "18px" }}>
            <b>{data.texts.t102}</b>
            {data.texts.t103}
            <b>{data.texts.t104}</b>
            {data.texts.t105}
            <b>{data.texts.t106}</b>
            {data.texts.t107}
            <a href={data.links.link017} target="_blank" rel="noreferrer">
              {data.texts.t108}
            </a>
            {data.texts.t109}
          </div>
          <div className={"tier-block"} data-tier={"ancs"} id={"ancs"}>
            <div className={"tier-head"}>
              <div
                className={"tier-badge"}
                style={{ background: "var(--c-ancs)" }}
              >
                {data.texts.t110}
              </div>
              <h2 style={{ color: "var(--c-ancs)" }}>{data.texts.t111}</h2>
              <span>{data.texts.t112}</span>
            </div>
            <p className={"lead"} style={{ marginBottom: "8px" }}>
              {data.texts.t113}
            </p>
            <p className={"muted"} style={{ marginBottom: "18px" }}>
              <b style={{ color: "var(--ink)" }}>{data.texts.t114}</b>
              {data.texts.t115}
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              <div className={"course"} id={"ancs-1"}>
                <div className={"code"} style={{ background: "var(--c-ancs)" }}>
                  {data.texts.t116}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t117}</h3>
                  <p>{data.texts.t118}</p>
                  <div className={"sub"}>{data.texts.t119}</div>
                  <ul>
                    <li>{data.texts.t120}</li>
                    <li>{data.texts.t121}</li>
                    <li>{data.texts.t122}</li>
                    <li>{data.texts.t123}</li>
                    <li>{data.texts.t124}</li>
                    <li>{data.texts.t125}</li>
                    <li>{data.texts.t126}</li>
                    <li>{data.texts.t127}</li>
                    <li>{data.texts.t128}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t129}</b>
                    {data.texts.t130}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t131}</b>
                      {data.texts.t132}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t133}</b>
                      {data.texts.t134}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t135}</b>
                      {data.texts.t136}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link018}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t137}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="ancs-1"
                      className="meta-cta"
                      label={data.texts.t137}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"ancs-2"}>
                <div className={"code"} style={{ background: "var(--c-ancs)" }}>
                  {data.texts.t138}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t139}</h3>
                  <p>{data.texts.t140}</p>
                  <div className={"sub"}>{data.texts.t141}</div>
                  <ul>
                    <li>{data.texts.t142}</li>
                    <li>{data.texts.t143}</li>
                    <li>{data.texts.t144}</li>
                    <li>{data.texts.t145}</li>
                    <li>{data.texts.t146}</li>
                    <li>{data.texts.t147}</li>
                    <li>{data.texts.t148}</li>
                    <li>{data.texts.t149}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t150}</b>
                    {data.texts.t151}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t152}</b>
                      {data.texts.t153}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t154}</b>
                      {data.texts.t155}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t156}</b>
                      {data.texts.t157}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link019}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t158}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="ancs-3"
                      className="meta-cta"
                      label={data.texts.t179}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"ancs-3"}>
                <div className={"code"} style={{ background: "var(--c-ancs)" }}>
                  {data.texts.t159}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t160}</h3>
                  <p>{data.texts.t161}</p>
                  <div className={"sub"}>{data.texts.t162}</div>
                  <ul>
                    <li>{data.texts.t163}</li>
                    <li>{data.texts.t164}</li>
                    <li>{data.texts.t165}</li>
                    <li>{data.texts.t166}</li>
                    <li>
                      <b>{data.texts.t167}</b>
                      {data.texts.t168}
                    </li>
                    <li>{data.texts.t169}</li>
                    <li>{data.texts.t170}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t171}</b>
                    {data.texts.t172}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t173}</b>
                      {data.texts.t174}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t175}</b>
                      {data.texts.t176}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t177}</b>
                      {data.texts.t178}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link020}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t179}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="ancs-3"
                      className="meta-cta"
                      label={data.texts.t179}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"tier-block"} data-tier={"choi"} id={"choi"}>
            <div className={"tier-head"}>
              <div
                className={"tier-badge"}
                style={{ background: "var(--c-choi)" }}
              >
                {data.texts.t180}
              </div>
              <h2 style={{ color: "var(--c-choi)" }}>{data.texts.t181}</h2>
              <span>{data.texts.t182}</span>
            </div>
            <p className={"lead"} style={{ marginBottom: "8px" }}>
              {data.texts.t183}
            </p>
            <p className={"muted"} style={{ marginBottom: "18px" }}>
              <b style={{ color: "var(--ink)" }}>{data.texts.t184}</b>
              {data.texts.t185}
            </p>
            <img alt='choi-lon' src='/images/choi-lon.jpg'
              style={{
                borderRadius: '16px',
                marginBottom: '16px'
              }}
            />
            <div style={{ display: "grid", gap: "12px" }}>
              <div className={"course"} id={"choi-1"}>
                <div className={"code"} style={{ background: "var(--c-choi)" }}>
                  {data.texts.t186}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t187}</h3>
                  <p>{data.texts.t188}</p>
                  <div className={"sub"}>{data.texts.t189}</div>
                  <ul>
                    <li>{data.texts.t190}</li>
                    <li>{data.texts.t191}</li>
                    <li>{data.texts.t192}</li>
                    <li>{data.texts.t193}</li>
                    <li>{data.texts.t194}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t195}</b>
                    {data.texts.t196}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t197}</b>
                      {data.texts.t198}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t199}</b>
                      {data.texts.t200}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t201}</b>
                      {data.texts.t202}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link021}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t203}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="choi-1"
                      className="meta-cta"
                      label={data.texts.t203}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"choi-2"}>
                <div className={"code"} style={{ background: "var(--c-choi)" }}>
                  {data.texts.t204}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t205}</h3>
                  <p>{data.texts.t206}</p>
                  <div className={"sub"}>{data.texts.t207}</div>
                  <ul>
                    <li>{data.texts.t208}</li>
                    <li>{data.texts.t209}</li>
                    <li>{data.texts.t210}</li>
                    <li>{data.texts.t211}</li>
                    <li>{data.texts.t212}</li>
                    <li>{data.texts.t213}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t214}</b>
                    {data.texts.t215}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t216}</b>
                      {data.texts.t217}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t218}</b>
                      {data.texts.t219}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t220}</b>
                      {data.texts.t221}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link022}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t222}
                    </a> */}

                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="choi-2"
                      className="meta-cta"
                      label={data.texts.t222}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"choi-3"}>
                <div className={"code"} style={{ background: "var(--c-choi)" }}>
                  {data.texts.t223}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t224}</h3>
                  <p>{data.texts.t225}</p>
                  <div className={"sub"}>{data.texts.t226}</div>
                  <ul>
                    <li>{data.texts.t227}</li>
                    <li>{data.texts.t228}</li>
                    <li>{data.texts.t229}</li>
                    <li>{data.texts.t230}</li>
                    <li>{data.texts.t231}</li>
                    <li>{data.texts.t232}</li>
                    <li>{data.texts.t233}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t234}</b>
                    {data.texts.t235}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t236}</b>
                      {data.texts.t237}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t238}</b>
                      {data.texts.t239}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t240}</b>
                      {data.texts.t241}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link023}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t242}
                    </a> */}

                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="choi-3"
                      className="meta-cta"
                      label={data.texts.t242}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"tier-block"} data-tier={"mxlh"} id={"mxlh"}>
            <div className={"tier-head"}>
              <div
                className={"tier-badge"}
                style={{ background: "var(--c-mxlh)" }}
              >
                {data.texts.t243}
              </div>
              <h2 style={{ color: "var(--c-mxlh)" }}>{data.texts.t244}</h2>
              <span>{data.texts.t245}</span>
            </div>
            <p className={"lead"} style={{ marginBottom: "8px" }}>
              {data.texts.t246}
            </p>
            <p className={"muted"} style={{ marginBottom: "18px" }}>
              <b style={{ color: "var(--ink)" }}>{data.texts.t247}</b>
              {data.texts.t248}
            </p>
            <img alt='mieng-xinh-loi-hay' src='/images/mieng-xinh-loi-hay.jpg'
              style={{
                borderRadius: '16px',
                marginBottom: '16px'
              }}
            />
            <div style={{ display: "grid", gap: "12px" }}>
              <div className={"course"} id={"mxlh-1"}>
                <div className={"code"} style={{ background: "var(--c-mxlh)" }}>
                  {data.texts.t249}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t250}</h3>
                  <p>{data.texts.t251}</p>
                  <div className={"sub"}>{data.texts.t252}</div>
                  <ul>
                    <li>{data.texts.t253}</li>
                    <li>{data.texts.t254}</li>
                    <li>{data.texts.t255}</li>
                    <li>{data.texts.t256}</li>
                    <li>{data.texts.t257}</li>
                    <li>{data.texts.t258}</li>
                    <li>{data.texts.t259}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t260}</b>
                    {data.texts.t261}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t262}</b>
                      {data.texts.t263}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t264}</b>
                      {data.texts.t265}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t266}</b>
                      {data.texts.t267}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link024}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t268}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="mxlh-1"
                      className="meta-cta"
                      label={data.texts.t268}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"mxlh-2"}>
                <div className={"code"} style={{ background: "var(--c-mxlh)" }}>
                  {data.texts.t269}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t270}</h3>
                  <p>{data.texts.t271}</p>
                  <div className={"sub"}>{data.texts.t272}</div>
                  <ul>
                    <li>{data.texts.t273}</li>
                    <li>{data.texts.t274}</li>
                    <li>{data.texts.t275}</li>
                    <li>{data.texts.t276}</li>
                    <li>{data.texts.t277}</li>
                    <li>{data.texts.t278}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t279}</b>
                    {data.texts.t280}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t281}</b>
                      {data.texts.t282}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t283}</b>
                      {data.texts.t284}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t285}</b>
                      {data.texts.t286}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link025}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t287}
                    </a> */}

                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="mxlh-2"
                      className="meta-cta"
                      label={data.texts.t287}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"mxlh-3"}>
                <div className={"code"} style={{ background: "var(--c-mxlh)" }}>
                  {data.texts.t288}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t289}</h3>
                  <p>{data.texts.t290}</p>
                  <div className={"sub"}>{data.texts.t291}</div>
                  <ul>
                    <li>{data.texts.t292}</li>
                    <li>{data.texts.t293}</li>
                    <li>{data.texts.t294}</li>
                    <li>{data.texts.t295}</li>
                    <li>{data.texts.t296}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t297}</b>
                    {data.texts.t298}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t299}</b>
                      {data.texts.t300}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t301}</b>
                      {data.texts.t302}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t303}</b>
                      {data.texts.t304}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link026}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t305}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="mxlh-3"
                      className="meta-cta"
                      label={data.texts.t305}
                    />
                  </div>
                </div>
              </div>
              <div className={"course"} id={"mxlh-4"}>
                <div className={"code"} style={{ background: "var(--c-mxlh)" }}>
                  {data.texts.t306}
                </div>
                <div style={{ minWidth: "0" }}>
                  <h3>{data.texts.t307}</h3>
                  <p>{data.texts.t308}</p>
                  <div className={"sub"}>{data.texts.t309}</div>
                  <ul>
                    <li>{data.texts.t310}</li>
                    <li>{data.texts.t311}</li>
                    <li>{data.texts.t312}</li>
                    <li>{data.texts.t313}</li>
                    <li>{data.texts.t314}</li>
                    <li>{data.texts.t315}</li>
                  </ul>
                  <div className={"out-box"}>
                    <b>{data.texts.t316}</b>
                    {data.texts.t317}
                  </div>
                  <div className={"cwarn"}>
                    <b>{data.texts.t318}</b>
                    {data.texts.t319}
                  </div>
                  <div className={"cmeta"}>
                    <span className={"meta-i"}>
                      <b>{data.texts.t320}</b>
                      {data.texts.t321}
                      <b>{data.texts.t322}</b>
                      {data.texts.t323}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t324}</b>
                      {data.texts.t325}
                    </span>
                    <span className={"meta-i"}>
                      <b>{data.texts.t326}</b>
                      {data.texts.t327}
                    </span>
                    {/* <a
                      className={"meta-cta"}
                      href={data.links.link027}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.texts.t328}
                    </a> */}
                    <CourseEnrollmentButton
                      onLoadingChange={setIsLoadingCourse}
                      courseId="mxlh-4"
                      className="meta-cta"
                      label={data.texts.t328}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"dinh"}>
        <div className={"wrap"}>
          <div className={"tier-head"} style={{ borderColor: "#C9A75F" }}>
            <div
              className={"tier-badge"}
              style={{ background: "var(--ink)", color: "#C9A75F" }}
            >
              {data.texts.t329}
            </div>
            <h2>{data.texts.t330}</h2>
            <span>{data.texts.t331}</span>
          </div>
          <p className={"lead"}>{data.texts.t332}</p>
          <div className={"note"} style={{ margin: "18px 0 22px" }}>
            <b>{data.texts.t333}</b>
            {data.texts.t334}
            <b>{data.texts.t335}</b>
            {data.texts.t336}
            <b>{data.texts.t337}</b>
            {data.texts.t338}
            <b>{data.texts.t339}</b>
            {data.texts.t340}
          </div>
          <div className={"grid2"}>
            <div className={"card"}>
              <h3>{data.texts.t341}</h3>
              <ul>
                <li>{data.texts.t342}</li>
                <li>{data.texts.t343}</li>
                <li>{data.texts.t344}</li>
              </ul>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t345}</h3>
              <ul>
                <li>{data.texts.t346}</li>
                <li>{data.texts.t347}</li>
                <li>{data.texts.t348}</li>
              </ul>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t349}</h3>
              <ul>
                <li>{data.texts.t350}</li>
                <li>{data.texts.t351}</li>
                <li>{data.texts.t352}</li>
              </ul>
            </div>
            <div className={"card"}>
              <h3>{data.texts.t353}</h3>
              <ul>
                <li>{data.texts.t354}</li>
                <li>{data.texts.t355}</li>
                <li>{data.texts.t356}</li>
              </ul>
            </div>
          </div>
          <div className={"btns"} style={{ marginTop: "22px" }}>
            <a
              className={"btn p"}
              href={data.links.link028}
              target="_blank"
              rel="noreferrer"
            >
              {data.texts.t357}
            </a>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t358}</div>
          <h2>{data.texts.t359}</h2>
          <div className={"cert"}>
            <div className={"certbox"}>
              <div className={"ic"}>{data.texts.t360}</div>
              <b>{data.texts.t361}</b>
              <p>{data.texts.t362}</p>
            </div>
            <div className={"certbox"}>
              <div className={"ic"}>{data.texts.t363}</div>
              <b>{data.texts.t364}</b>
              <p>{data.texts.t365}</p>
            </div>
            <div className={"certbox"}>
              <div className={"ic"}>{data.texts.t366}</div>
              <b>{data.texts.t367}</b>
              <p>{data.texts.t368}</p>
            </div>
            <div className={"certbox gold"}>
              <div className={"ic"}>{data.texts.t369}</div>
              <b>{data.texts.t370}</b>
              <p>{data.texts.t371}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrap"}>
          <div className={"eyebrow"}>{data.texts.t372}</div>
          <h2>{data.texts.t373}</h2>
          <p className={"lead"} style={{ marginBottom: "24px" }}>
            {data.texts.t374}
          </p>
          <div className={"steps"}>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t375}</h3>
                <p>{data.texts.t376}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t377}</h3>
                <p>{data.texts.t378}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t379}</h3>
                <p>{data.texts.t380}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"num"}></div>
              <div>
                <h3>{data.texts.t381}</h3>
                <p>
                  {data.texts.t382}
                  <a
                    href={data.links.link029}
                    style={{ color: "var(--o-d)", fontWeight: "600" }}
                  >
                    {data.texts.t383}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"tight"}>
        <div className={"wrap"}>
          <div className={"band"}>
            <h2>{data.texts.t384}</h2>
            <p>{data.texts.t385}</p>
            <div className={"btns"}>
              <a
                className={"btn g"}
                href={data.links.link030}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t386}
              </a>
              <a
                className={"btn s"}
                href={data.links.link031}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t387}
              </a>
            </div>
          </div>
        </div>
      </section>

      <LoadingOverlay show={isLoadingCourse} text="Đang tải lịch học..." />
    </div>
  );
}
