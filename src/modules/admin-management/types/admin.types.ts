import type { BookModel, CourseModel } from "../../../models/site";
import type {
  BookOrderModel,
  BookOrderStatus,
} from "../../book-order/models/BookOrderModel";

export type AdminTab =
  | "dashboard"
  | "bookOrders"
  | "books"
  | "courses";

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

export type {
  BookModel,
  CourseModel,
  BookOrderModel,
  BookOrderStatus,
};
