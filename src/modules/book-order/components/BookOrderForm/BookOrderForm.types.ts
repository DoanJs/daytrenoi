import { BookOrderModel, CreateBookOrderInput } from "../../models/BookOrderModel";

export interface SelectedBook {
  bookId: string;
  bookName: string;
  price: number;
  coverUrl?: string;
}

export interface BookOrderFormProps {
  book: SelectedBook;
  zaloOaUrl: string;
  onClose?: () => void;
  onCreateOrder?: (input: CreateBookOrderInput) => Promise<BookOrderModel>;
  onOrderCreated?: (order: BookOrderModel) => void;
}
