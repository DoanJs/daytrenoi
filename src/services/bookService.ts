import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase.config";
import { BookModel } from "../models/site";

const COLLECTION_NAME = "books";

/**
 * Type dùng khi thêm sách mới.
 * Không cần truyền:
 * - id
 * - createAt
 * - updateAt
 */
export type AddBookInput = Omit<BookModel, "id" | "createAt" | "updateAt">;

/**
 * Type dùng khi cập nhật sách.
 * Không cho sửa:
 * - id
 * - createAt
 * - updateAt
 */
export type UpdateBookInput = Partial<
  Omit<BookModel, "id" | "createAt" | "updateAt">
>;

/**
 * =====================================================
 * 1. Lấy danh sách sách đang hiển thị
 * =====================================================
 */
export const getBooks = async (): Promise<BookModel[]> => {
  const q = query(
    collection(db, COLLECTION_NAME),

    where("isActive", "==", true),

    orderBy("sortOrder", "asc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,

    ...docSnap.data(),
  })) as BookModel[];
};

/**
 * =====================================================
 * 2. Lấy toàn bộ sách
 *
 * Dùng cho trang Admin.
 * Bao gồm cả isActive = false.
 * =====================================================
 */
export const getAllBooks = async (): Promise<BookModel[]> => {
  const q = query(
    collection(db, COLLECTION_NAME),

    orderBy("sortOrder", "asc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,

    ...docSnap.data(),
  })) as BookModel[];
};

/**
 * =====================================================
 * 3. Lấy 1 sách theo ID
 * =====================================================
 */
export const getBook = async (id: string): Promise<BookModel | null> => {
  const ref = doc(db, COLLECTION_NAME, id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,

    ...snapshot.data(),
  } as BookModel;
};

/**
 * =====================================================
 * 4. Thêm sách
 * =====================================================
 */
export const addBook = async (data: AddBookInput): Promise<BookModel> => {
  /**
   * Tạo document reference
   * với ID tự động.
   */
  const ref = doc(collection(db, COLLECTION_NAME));

  const payload = {
    ...data,

    /**
     * Tôi thích lưu id vào document luôn.
     * Không bắt buộc nhưng tiện khi dùng data.
     */
    id: ref.id,

    createAt: serverTimestamp(),

    updateAt: serverTimestamp(),
  };

  await setDoc(ref, payload);

  /**
   * serverTimestamp chưa resolve ngay ở client,
   * nên trả Timestamp.now() để UI có data dùng ngay.
   */
  return {
    ...data,

    id: ref.id,

    createAt: Timestamp.now(),

    updateAt: Timestamp.now(),
  };
};

/**
 * =====================================================
 * 5. Cập nhật sách
 * =====================================================
 */
export const updateBook = async (
  id: string,
  updates: UpdateBookInput,
): Promise<void> => {
  const ref = doc(db, COLLECTION_NAME, id);

  await updateDoc(ref, {
    ...updates,

    updateAt: serverTimestamp(),
  });
};

/**
 * =====================================================
 * 6. Xóa sách
 * =====================================================
 */
export const deleteBook = async (id: string): Promise<void> => {
  const ref = doc(db, COLLECTION_NAME, id);

  await deleteDoc(ref);
};
