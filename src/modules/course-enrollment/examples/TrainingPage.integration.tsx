import {
  useState,
} from "react";

import CourseEnrollmentButton
  from "../components/CourseEnrollmentButton/CourseEnrollmentButton";

/**
 * Ví dụ thay trực tiếp đoạn:
 *
 * <a
 *   className="meta-cta"
 *   href={data.links.link018}
 * >
 *   {data.texts.t137}
 * </a>
 *
 * bằng:
 *
 * <CourseEnrollmentButton
 *   courseId="ancs-1"
 * />
 */
export default function TrainingIntegrationExample() {
  const [
    isLoadingCourse,
    setIsLoadingCourse,
  ] = useState(false);

  return (
    <div>
      <CourseEnrollmentButton
        courseId="ancs-1"
        className="meta-cta"
        onLoadingChange={
          setIsLoadingCourse
        }
      />

      {/*
        Nếu project đã có LoadingOverlay:

        <LoadingOverlay
          show={isLoadingCourse}
          text="Đang tải lịch học..."
        />
      */}
    </div>
  );
}
