import {
  useState,
} from "react";

import {
  getCourseEnrollment,
} from "../../services/courseEnrollmentService";

import {
  CourseEnrollmentModel,
} from "../../models/CourseEnrollmentModel";

import CourseEnrollmentModal
  from "../CourseEnrollmentModal/CourseEnrollmentModal";

import "./CourseEnrollmentButton.css";

interface Props {
  courseId: string;

  label?: string;

  className?: string;

  /**
   * Optional:
   * dùng LoadingOverlay chung của project nếu muốn.
   */
  onLoadingChange?: (
    loading: boolean,
  ) => void;
}

export default function CourseEnrollmentButton({
  courseId,
  label = "Đăng ký →",
  className = "meta-cta",
  onLoadingChange,
}: Props) {
  const [
    selectedCourse,
    setSelectedCourse,
  ] =
    useState<CourseEnrollmentModel | null>(
      null,
    );

  const [
    error,
    setError,
  ] = useState("");

  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const handleOpen = async () => {
    try {
      setIsLoading(true);
      setError("");

      onLoadingChange?.(true);

      const course =
        await getCourseEnrollment(
          courseId,
        );

      if (!course) {
        setError(
          "Khóa học này hiện chưa có lịch mở đăng ký.",
        );

        return;
      }

      setSelectedCourse(
        course,
      );
    } catch (error) {
      console.error(
        "getCourseEnrollment error:",
        error,
      );

      setError(
        "Không thể tải lịch học. Vui lòng thử lại.",
      );
    } finally {
      setIsLoading(false);

      onLoadingChange?.(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`btn ${className}`}
        onClick={handleOpen}
        disabled={isLoading}
        style={{
          background: 'var(--o)',
          color: '#fff'
        }}
      >
        {isLoading
          ? "Đang tải..."
          : label}
      </button>

      {error ? (
        <div
          className="cem-inline-error"
          role="alert"
        >
          {error}

          <button
            type="button"
            onClick={() =>
              setError("")
            }
          >
            ×
          </button>
        </div>
      ) : null}

      {selectedCourse ? (
        <CourseEnrollmentModal
          course={selectedCourse}
          onClose={() =>
            setSelectedCourse(
              null,
            )
          }
        />
      ) : null}
    </>
  );
}
