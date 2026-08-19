import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {
  BookOrderModel,
  BookOrderStatus,
  CreateBookOrderInput,
} from "../models/BookOrderModel";
import { db } from "../../../firebase.config";

const createOrderCode = () => {
  const now = new Date();
  const datePart = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `DH-${datePart}-${randomPart}`;
};

export const createBookOrderFirestore = async (
  input: CreateBookOrderInput
): Promise<BookOrderModel> => {
  const ref = doc(collection(db, "bookOrders"));
  const quantity = Math.max(1, input.item.quantity);
  const orderCode = createOrderCode();

  const payload = {
    id: ref.id,
    orderCode,
    customerName: input.customerName.trim(),
    phone: input.phone.trim(),
    address: input.address.trim(),
    items: [{ ...input.item, quantity }],
    note: input.note?.trim() || "",
    totalQuantity: quantity,
    totalAmount: input.item.price * quantity,
    status: "pending" as const,
    zaloConnected: false,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  };

  await setDoc(ref, payload);

  return {
    ...payload,
    createAt: Timestamp.now(),
    updateAt: Timestamp.now(),
  };
};

export const getBookOrdersFirestore = async (): Promise<BookOrderModel[]> => {
  const snap = await getDocs(
    query(collection(db, "bookOrders"), orderBy("createAt", "desc"))
  );

  return snap.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as BookOrderModel[];
};

export const updateBookOrderStatusFirestore = async (
  id: string,
  status: BookOrderStatus
) => {
  await updateDoc(doc(db, "bookOrders", id), {
    status,
    updateAt: serverTimestamp(),
  });
};

export const updateBookOrderZaloConnectedFirestore = async (
  id: string,
  zaloConnected: boolean
) => {
  await updateDoc(doc(db, "bookOrders", id), {
    zaloConnected,
    updateAt: serverTimestamp(),
  });
};
