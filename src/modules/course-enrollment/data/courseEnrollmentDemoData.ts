import {
  AddCourseEnrollmentInput,
} from "../models/CourseEnrollmentModel";

/**
 * DATA DEMO
 *
 * Thay lịch, học phí, link đăng ký, quà tặng
 * bằng dữ liệu thật trước khi seed Firestore.
 */
export const courseEnrollmentDemoData: AddCourseEnrollmentInput[] = [
  {
    "courseId": "ancs-1",
    "title": "May đo & Lượng giá",
    "schedule": "15–16/09/2026",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "earlyBirdFee": 3200000,
    "earlyBirdDeadline": "05/09/2026",
    "registerUrl": "https://example.com/dang-ky/ancs-1",
    "giftsRemaining": 5,
    "giftDescription": "Bộ tài liệu thực hành đi kèm",
    "note": "Số lượng học viên có giới hạn.",
    "isActive": true,
    "sortOrder": 1
  },
  {
    "courseId": "ancs-2",
    "title": "Trị liệu giao tiếp",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 4000000,
    "registerUrl": "https://example.com/dang-ky/ancs-2",
    "isActive": true,
    "sortOrder": 2
  },
  {
    "courseId": "ancs-3",
    "title": "Chuyên sâu — May đo chương trình trị liệu âm ngữ phức hợp",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 4500000,
    "registerUrl": "https://example.com/dang-ky/ancs-3",
    "isActive": true,
    "sortOrder": 3
  },
  {
    "courseId": "choi-1",
    "title": "Chơi lớn — Đọc được cuộc chơi",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/choi-1",
    "isActive": true,
    "sortOrder": 4
  },
  {
    "courseId": "choi-2",
    "title": "Nói chơi — Chơi để trẻ hay nói",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/choi-2",
    "isActive": true,
    "sortOrder": 5
  },
  {
    "courseId": "choi-3",
    "title": "Chơi cùng giác quan — Giác quan, hành vi, ngôn ngữ",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/choi-3",
    "isActive": true,
    "sortOrder": 6
  },
  {
    "courseId": "mxlh-1",
    "title": "Cấu âm — Xác định đúng lỗi & huấn luyện",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/mxlh-1",
    "isActive": true,
    "sortOrder": 7
  },
  {
    "courseId": "mxlh-2",
    "title": "Âm vị — Cài đặt lại hệ thống",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/mxlh-2",
    "isActive": true,
    "sortOrder": 8
  },
  {
    "courseId": "mxlh-3",
    "title": "Bàn tay kì diệu — Bản đồ giải phẫu phát âm",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/mxlh-3",
    "isActive": true,
    "sortOrder": 9
  },
  {
    "courseId": "mxlh-4",
    "title": "Trẻ nói khó và đồng mắc — Kích âm nâng cao",
    "schedule": "Đang cập nhật",
    "location": "Hà Nội",
    "tuitionFee": 3500000,
    "registerUrl": "https://example.com/dang-ky/mxlh-4",
    "isActive": true,
    "sortOrder": 10
  }
];
