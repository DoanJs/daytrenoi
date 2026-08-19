import type { Timestamp } from "firebase/firestore";

export type BookOrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "completed"
  | "cancelled";

export interface BookOrderItem {
  bookId: string;
  bookName: string;
  price: number;
  quantity: number;
  coverUrl?: string;
}

export interface BookOrderModel {
  id: string;
  orderCode: string;

  customerName: string;
  phone: string;
  address: string;

  items: BookOrderItem[];
  note?: string;

  totalQuantity: number;
  totalAmount: number;

  status: BookOrderStatus;
  zaloConnected: boolean;

  createAt: Timestamp;
  updateAt: Timestamp;
}

export interface CreateBookOrderInput {
  customerName: string;
  phone: string;
  address: string;
  item: BookOrderItem;
  note?: string;
}
