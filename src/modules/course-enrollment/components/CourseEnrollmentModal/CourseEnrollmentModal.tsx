import "./CourseEnrollmentModal.css";

import {
  CourseEnrollmentModel,
} from "../../models/CourseEnrollmentModel";

interface Props {
  course: CourseEnrollmentModel;
  onClose: () => void;
}

const formatMoney = (
  value: number,
) => {
  return new Intl.NumberFormat(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  ).format(value);
};

export default function CourseEnrollmentModal({
  course,
  onClose,
}: Props) {
  const hasEarlyBird =
    typeof course.earlyBirdFee === "number" &&
    course.earlyBirdFee > 0;

  const hasGift =
    typeof course.giftsRemaining === "number";

  return (
    <div
      className="cem-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className="cem-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cem-title"
      >
        <button
          type="button"
          className="cem-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <div className="cem-eyebrow">
          LỊCH HỌC & HỌC PHÍ
        </div>

        <h2 id="cem-title">
          {course.title}
        </h2>

        <p className="cem-intro">
          Thông tin đợt học đang mở đăng ký.
        </p>

        <div className="cem-info">
          <div className="cem-row">
            <span>
              📅 Lịch học
            </span>

            <b>
              {course.schedule}
            </b>
          </div>

          <div className="cem-row">
            <span>
              📍 Địa điểm
            </span>

            <b>
              {course.location}
            </b>
          </div>

          <div className="cem-row">
            <span>
              Học phí
            </span>

            <b>
              {formatMoney(
                course.tuitionFee,
              )}
            </b>
          </div>
        </div>

        {hasEarlyBird ? (
          <div className="cem-early">
            <span>
              Ưu đãi đăng ký sớm
            </span>

            <strong>
              {formatMoney(
                course.earlyBirdFee!,
              )}
            </strong>

            {course.earlyBirdDeadline ? (
              <p>
                Áp dụng khi đăng ký trước{" "}
                <b>
                  {
                    course.earlyBirdDeadline
                  }
                </b>
              </p>
            ) : null}
          </div>
        ) : null}

        {hasGift ? (
          <div
            className={`cem-gift ${
              course.giftsRemaining === 0
                ? "sold-out"
                : ""
            }`}
          >
            {course.giftsRemaining === 0 ? (
              <>
                🎁 Quà tặng đi kèm đã hết.
              </>
            ) : (
              <>
                🎁 Chỉ còn{" "}
                <b>
                  {course.giftsRemaining}
                </b>{" "}
                phần quà
                {course.giftDescription
                  ? ` — ${course.giftDescription}`
                  : ""}
              </>
            )}
          </div>
        ) : null}

        {course.note ? (
          <p className="cem-note">
            {course.note}
          </p>
        ) : null}

        <a
          className="cem-register"
          href={course.registerUrl}
          target="_blank"
          rel="noreferrer"
        >
          Đăng ký lớp học →
        </a>
      </div>
    </div>
  );
}
