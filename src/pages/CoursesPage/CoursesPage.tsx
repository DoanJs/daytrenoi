import { useEffect, useState } from "react";
import "./CoursesPage.css";
import { CoursesPageData } from "./CoursesPage.types";

import { CourseModel } from "../../models/site";
import { getCourses } from "../../services/courseService";
import {
  SelectedCourse,
  CourseRegistrationForm,
} from "../../modules/course-registration-module";

interface Props {
  data: CoursesPageData;
}

export default function CoursesPage({ data }: Props) {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<CourseModel | null>(
    null,
  );
  const [selectedCourseForRegister, setSelectedCourseForRegister] =
    useState<SelectedCourse | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setIsLoading(true);
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("getCourses error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, []);

  const handleOpenCourse = (course: CourseModel) => {
    setSelectedCourse(course);
  };

  const handleCloseCourse = () => {
    setSelectedCourse(null);
  };

  const formatMoney = (value?: number) => {
    if (typeof value !== "number") return "";

    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="pg">
      <div className="hero" style={{ padding: "48px 0 34px" }}>
        <div className="wrap">
          <div className="eyebrow">{data.texts.t001}</div>

          <h1 style={{ maxWidth: "18ch" }}>
            {data.texts.t002}
            <br />
            {data.texts.t003}
          </h1>

          <p className="lead">{data.texts.t004}</p>
        </div>
      </div>

      <section className="tight">
        <div className="wrap">
          {isLoading ? (
            <p className="muted">Đang tải khóa học...</p>
          ) : (
            <div className="courses">
              {courses.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="ph">
                    {course.coverUrl ? (
                      <img
                        src={
                          course.coverUrl ||
                          "/images/speech-therapy-owl-d5c2c84c.png"
                        }
                        alt={course.title}
                      />
                    ) : (
                      <div style={{ fontSize: "48px" }}>🎓</div>
                    )}
                  </div>

                  <div className="bd">
                    <span className="tagline">
                      {course.location || "Khóa học"}
                    </span>

                    <h3>{course.title}</h3>

                    {course.note ? <p>{course.note}</p> : null}

                    <div className="course-meta">
                      {course.schedule ? (
                        <span>
                          <b>Lịch:</b> {course.schedule}
                        </span>
                      ) : null}

                      {course.location ? (
                        <span>
                          <b>Địa điểm:</b> {course.location}
                        </span>
                      ) : null}

                      {typeof course.giftsRemaining === "number" &&
                      course.giftsRemaining > 0 ? (
                        <span>
                          <b>Quà tặng:</b> còn {course.giftsRemaining}
                        </span>
                      ) : null}
                    </div>

                    <div className="course-price">
                      {typeof course.earlyBirdFee === "number" &&
                      course.earlyBirdFee > 0
                        ? formatMoney(course.earlyBirdFee)
                        : formatMoney(course.tuitionFee)}
                    </div>

                    <div className="course-actions">
                      <button
                        type="button"
                        className="btn s"
                        onClick={() => handleOpenCourse(course)}
                      >
                        Xem lịch & học phí
                      </button>

                      {/* <a
                        className="btn p"
                        href={"https://zalo.me/0866620583"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Đăng ký khóa học
                      </a> */}
                      <button
                        type="button"
                        className="btn p"
                        onClick={() =>
                          setSelectedCourseForRegister({
                            courseId: course.id,
                            courseTitle: course.title,
                            coverUrl: course.coverUrl,
                            // coverUrl: "/images/hoc-de-lam-duoc-khong-chi-de-biet.jpg",

                            schedule: course.schedule,
                            location: course.location,

                            tuitionFee: course.tuitionFee,
                            earlyBirdFee: course.earlyBirdFee,
                            earlyBirdDeadline: course.earlyBirdDeadline,

                            giftsRemaining: course.giftsRemaining,

                            giftDescription: course.giftDescription,
                          })
                        }
                      >
                        Đăng ký khóa học
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="muted" style={{ marginTop: "20px" }}>
            {data.texts.t005} {data.texts.t006}
          </p>
          <a className={"btn p"} href={"#lop-cha-me"}>
            Lớp dành cho phụ huynh
          </a>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <h2>{data.texts.t007}</h2>

          <div className="grid2" style={{ marginTop: "20px" }}>
            <div className="card">
              <h3>{data.texts.t008}</h3>
              <p>
                {data.texts.t009}
                <b>{data.texts.t010}</b>
                {data.texts.t011}
              </p>
            </div>

            <div className="card">
              <h3>{data.texts.t012}</h3>
              <p>
                {data.texts.t013}
                <b>{data.texts.t014}</b>
                {data.texts.t015}
              </p>
            </div>

            <div className="card">
              <h3>{data.texts.t016}</h3>
              <p>
                {data.texts.t017}
                <b>{data.texts.t018}</b>
                {data.texts.t019}
              </p>
            </div>

            <div className="card">
              <h3>{data.texts.t020}</h3>
              <p>
                {data.texts.t021}
                <b>{data.texts.t022}</b>
                {data.texts.t023}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="band">
            <h2>{data.texts.t024}</h2>
            <p>{data.texts.t025}</p>

            <div className="btns">
              <a
                className="btn g"
                href={data.links.link001}
                target="_blank"
                rel="noreferrer"
              >
                {data.texts.t026}
              </a>

              <a className="btn s" href={data.links.link002}>
                {data.texts.t027}
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedCourse && (
        <div
          className="course-detail-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) handleCloseCourse();
          }}
        >
          <div className="course-detail-popup">
            <button
              type="button"
              className="course-detail-close"
              onClick={handleCloseCourse}
            >
              ×
            </button>

            <div className="course-detail-grid">
              <div>
                {/* <img
                  src="/images/hoc-de-lam-duoc-khong-chi-de-biet.jpg"
                  alt={selectedCourse.title}
                /> */}
                {selectedCourse.coverUrl ? (
                  <img
                    src={selectedCourse.coverUrl}
                    alt={selectedCourse.title}
                  />
                ) : (
                  <div
                    style={{
                      minHeight: "220px",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "64px",
                      background: "var(--o-p)",
                      borderRadius: "12px",
                    }}
                  >
                    🎓
                  </div>
                )}
              </div>

              <div>
                <span className="tagline">
                  {selectedCourse.location || "Khóa học"}
                </span>

                <h2>{selectedCourse.title}</h2>

                <div className="course-detail-info">
                  {selectedCourse.schedule ? (
                    <div>
                      <b>Lịch:</b> {selectedCourse.schedule}
                    </div>
                  ) : null}

                  {selectedCourse.location ? (
                    <div>
                      <b>Địa điểm:</b> {selectedCourse.location}
                    </div>
                  ) : null}

                  <div>
                    <b>Học phí:</b> {formatMoney(selectedCourse.tuitionFee)}
                  </div>

                  {typeof selectedCourse.earlyBirdFee === "number" &&
                  selectedCourse.earlyBirdFee > 0 ? (
                    <div>
                      <b>Ưu đãi sớm:</b>{" "}
                      {formatMoney(selectedCourse.earlyBirdFee)}
                      {selectedCourse.earlyBirdDeadline
                        ? ` · trước ${selectedCourse.earlyBirdDeadline}`
                        : ""}
                    </div>
                  ) : null}

                  {typeof selectedCourse.giftsRemaining === "number" ? (
                    <div>
                      <b>Quà tặng:</b>{" "}
                      {selectedCourse.giftsRemaining > 0
                        ? `chỉ còn ${selectedCourse.giftsRemaining} phần`
                        : "đã hết"}
                    </div>
                  ) : null}
                </div>

                {selectedCourse.giftDescription ? (
                  <div className="course-detail-note">
                    <b>Quà tặng đi kèm:</b> {selectedCourse.giftDescription}
                  </div>
                ) : null}

                {selectedCourse.note ? (
                  <div className="course-detail-note">
                    {selectedCourse.note}
                  </div>
                ) : null}

                <div className="course-detail-price">
                  {typeof selectedCourse.earlyBirdFee === "number" &&
                  selectedCourse.earlyBirdFee > 0
                    ? formatMoney(selectedCourse.earlyBirdFee)
                    : formatMoney(selectedCourse.tuitionFee)}
                </div>

                {/* <a
                  className="btn p"
                  href={"https://zalo.me/0866620583"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Đăng ký khóa học
                </a> */}
                <button
                  type="button"
                  className="btn p"
                  onClick={() =>
                    setSelectedCourseForRegister({
                      courseId: selectedCourse.id,
                      courseTitle: selectedCourse.title,
                      coverUrl: selectedCourse.coverUrl,
                      // coverUrl: "/images/hoc-de-lam-duoc-khong-chi-de-biet.jpg",

                      schedule: selectedCourse.schedule,
                      location: selectedCourse.location,

                      tuitionFee: selectedCourse.tuitionFee,
                      earlyBirdFee: selectedCourse.earlyBirdFee,
                      earlyBirdDeadline: selectedCourse.earlyBirdDeadline,

                      giftsRemaining: selectedCourse.giftsRemaining,

                      giftDescription: selectedCourse.giftDescription,
                    })
                  }
                >
                  Đăng ký khóa học
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCourseForRegister && (
        <div
          className="course-registration-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedCourseForRegister(null);
            }
          }}
        >
          <div className="course-registration-popup">
            <CourseRegistrationForm
              course={selectedCourseForRegister}
              zaloOaUrl="https://zalo.me/0866620583"
              onClose={() => setSelectedCourseForRegister(null)}
              onRegistrationCreated={(registration: any) => {
                console.log("Đã đăng ký:", registration);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
