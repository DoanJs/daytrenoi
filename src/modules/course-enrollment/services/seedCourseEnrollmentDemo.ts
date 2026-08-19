import {
  courseEnrollmentDemoData,
} from "../data/courseEnrollmentDemoData";

import {
  addCourseEnrollment,
} from "./courseEnrollmentService";

/**
 * CHỈ DÙNG KHI DEV / DEMO.
 *
 * Gọi một lần để tạo 10 document mẫu trong:
 *
 * courses/
 *   ancs-1
 *   ancs-2
 *   ancs-3
 *   choi-1
 *   choi-2
 *   choi-3
 *   mxlh-1
 *   mxlh-2
 *   mxlh-3
 *   mxlh-4
 */
export const seedCourseEnrollmentDemo =
  async () => {
    for (
      const course
      of courseEnrollmentDemoData
    ) {
      await addCourseEnrollment(
        course,
      );
    }
  };
