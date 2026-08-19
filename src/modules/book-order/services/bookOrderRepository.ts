import { Timestamp } from "firebase/firestore";
import {
  BookOrderModel,
  BookOrderStatus,
  CreateBookOrderInput,
} from "../models/BookOrderModel";

const STORAGE_KEY = "owlspeaks-book-orders-v2";

const createOrderCode = () => {
  const now = new Date();
  const datePart = `${String(now.getFullYear()).slice(-2)}${String(
    now.getMonth() + 1
  ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `DH-${datePart}-${randomPart}`;
};

const serialize = (orders: BookOrderModel[]) =>
  JSON.stringify(
    orders.map((order) => ({
      ...order,
      createAt: order.createAt.toMillis(),
      updateAt: order.updateAt.toMillis(),
    }))
  );

const deserialize = (raw: string): BookOrderModel[] => {
  const parsed = JSON.parse(raw) as Array<
    Omit<BookOrderModel, "createAt" | "updateAt"> & {
      createAt: number;
      updateAt: number;
    }
  >;

  return parsed.map((order) => ({
    ...order,
    createAt: Timestamp.fromMillis(order.createAt),
    updateAt: Timestamp.fromMillis(order.updateAt),
  }));
};

const readOrders = (): BookOrderModel[] => {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return deserialize(raw);
  } catch {
    return [];
  }
};

const writeOrders = (orders: BookOrderModel[]) => {
  window.localStorage.setItem(STORAGE_KEY, serialize(orders));
};

export const createBookOrder = async (
  input: CreateBookOrderInput
): Promise<BookOrderModel> => {
  const now = Timestamp.now();
  const quantity = Math.max(1, input.item.quantity);

  const order: BookOrderModel = {
    id: crypto.randomUUID(),
    orderCode: createOrderCode(),
    customerName: input.customerName.trim(),
    phone: input.phone.trim(),
    address: input.address.trim(),
    items: [{ ...input.item, quantity }],
    note: input.note?.trim() || "",
    totalQuantity: quantity,
    totalAmount: input.item.price * quantity,
    status: "pending",
    zaloConnected: false,
    createAt: now,
    updateAt: now,
  };

  const orders = readOrders();
  writeOrders([order, ...orders]);
  return order;
};

export const getBookOrders = async () => readOrders();

export const updateBookOrderStatus = async (
  id: string,
  status: BookOrderStatus
): Promise<BookOrderModel> => {
  const orders = readOrders();
  const index = orders.findIndex((order) => order.id === id);
  if (index < 0) throw new Error("Không tìm thấy đơn hàng.");

  orders[index] = {
    ...orders[index],
    status,
    updateAt: Timestamp.now(),
  };

  writeOrders(orders);
  return orders[index];
};

export const updateBookOrderZaloConnected = async (
  id: string,
  zaloConnected: boolean
): Promise<BookOrderModel> => {
  const orders = readOrders();
  const index = orders.findIndex((order) => order.id === id);
  if (index < 0) throw new Error("Không tìm thấy đơn hàng.");

  orders[index] = {
    ...orders[index],
    zaloConnected,
    updateAt: Timestamp.now(),
  };

  writeOrders(orders);
  return orders[index];
};
