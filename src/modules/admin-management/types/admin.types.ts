import type { BookModel, CourseModel } from "../../../models/site";
import type {
  BookOrderModel,
  BookOrderStatus,
} from "../../book-order/models/BookOrderModel";

export type AdminTab =
  | "dashboard"
  | "bookOrders"
  | "books"
  | "courses"
  | "knowledge";

export type AdminToastType =
  | "success"
  | "error"
  | "info";

export interface AdminToastState {
  show: boolean;
  message: string;
  type: AdminToastType;
}

export type AddBookInput = Omit<
  BookModel,
  "id" | "createAt" | "updateAt"
>;

export type UpdateBookInput = Partial<
  Omit<
    BookModel,
    "id" | "createAt" | "updateAt"
  >
>;

export type AddCourseInput = Omit<
  CourseModel,
  "id" | "createAt" | "updateAt"
>;

export type UpdateCourseInput = Partial<
  Omit<
    CourseModel,
    "id" | "courseId" | "createAt" | "updateAt"
  >
>;

export type UpdateBookOrderInput = Partial<
  Omit<
    BookOrderModel,
    "id" | "orderCode" | "createAt" | "updateAt"
  >
>;

export interface KnowledgeModel {
  id: string;

  /** Tiêu đề bài viết */
  title: string;

  /** URL nội bộ, ví dụ: bat-am-thuat-ngu-bi-hiem */
  slug: string;

  /** Danh mục */
  category: string;

  /** Mô tả ngắn dùng ở card */
  excerpt: string;

  /** Ảnh đại diện */
  coverUrl: string;

  /** Nội dung đầy đủ của bài viết */
  content: string;

  /** Tác giả */
  author: string;

  /** Lượt xem */
  views: number;

  /** Hiển thị / ẩn */
  isActive: boolean;

  /** Thứ tự hiển thị */
  sortOrder: number;

  createAt?: any;
  updateAt?: any;
}

export interface AddKnowledgeInput {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverUrl: string;
  content: string;
  author: string;
  views: number;
  isActive: boolean;
  sortOrder: number;
}

export type UpdateKnowledgeInput =
  Partial<AddKnowledgeInput>;

  
export type {
  BookModel,
  CourseModel,
  BookOrderModel,
  BookOrderStatus,
};
