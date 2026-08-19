import type { Timestamp } from "firebase/firestore";

export interface CourseEnrollmentModel {
  /**
   * Nên dùng chính courseId làm document ID Firestore:
   * ancs-1, ancs-2, ancs-3,
   * choi-1, choi-2, choi-3,
   * mxlh-1, mxlh-2, mxlh-3, mxlh-4
   */
  id: string;

  /**
   * ID dùng để liên kết với block course hiện tại trong TrainingPage.
   */
  courseId: string;

  /**
   * Tên khóa học để hiển thị trong modal.
   */
  title: string;

  /**
   * Ví dụ:
   * "15–16/09/2026"
   */
  schedule: string;

  /**
   * Ví dụ:
   * "Hà Nội"
   * "Đà Nẵng"
   * "Online"
   */
  location: string;

  /**
   * Học phí niêm yết.
   * Lưu number, không lưu chuỗi "3.500.000đ".
   */
  tuitionFee: number;

  /**
   * Giá ưu đãi đăng ký sớm.
   * Có thể bỏ trống nếu đợt này không có ưu đãi.
   */
  earlyBirdFee?: number;

  /**
   * Dùng chuỗi cho phần hiển thị deadline linh hoạt.
   * Ví dụ "05/09/2026".
   */
  earlyBirdDeadline?: string;

  /**
   * Link form đăng ký / landing page.
   */
  registerUrl: string;

  /**
   * Số phần quà còn lại.
   * 0 = hết quà.
   * undefined = không áp dụng quà tặng.
   */
  giftsRemaining?: number;

  /**
   * Ví dụ "Bộ tài liệu thực hành đi kèm".
   */
  giftDescription?: string;

  /**
   * Ghi chú thêm:
   * "Số lượng học viên có giới hạn."
   */
  note?: string;

  /**
   * Admin có muốn hiển thị lịch này trên web không.
   */
  isActive: boolean;

  /**
   * Dùng khi sau này một khóa có nhiều đợt/lịch.
   */
  sortOrder: number;

  createAt: Timestamp;
  updateAt: Timestamp;
}

export type AddCourseEnrollmentInput = Omit<
  CourseEnrollmentModel,
  "id" | "createAt" | "updateAt"
>;

export type UpdateCourseEnrollmentInput = Partial<
  Omit<
    CourseEnrollmentModel,
    "id" | "courseId" | "createAt" | "updateAt"
  >
>;
