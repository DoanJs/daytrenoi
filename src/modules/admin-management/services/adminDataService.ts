import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase.config";

import type {
  AddBookInput,
  AddCourseInput,
  BookModel,
  BookOrderModel,
  CourseModel,
  UpdateBookInput,
  UpdateBookOrderInput,
  UpdateCourseInput,
} from "../types/admin.types";

const BOOKS_COLLECTION = "books";
const COURSES_COLLECTION = "courses";
const BOOK_ORDERS_COLLECTION = "bookOrders";

/* =====================================================
 * BOOKS
 * ===================================================== */

export const adminGetAllBooks =
  async (): Promise<BookModel[]> => {
    const snap = await getDocs(
      query(
        collection(
          db,
          BOOKS_COLLECTION,
        ),
        orderBy(
          "sortOrder",
          "asc",
        ),
      ),
    );

    return snap.docs.map(
      (docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }),
    ) as BookModel[];
  };

export const adminAddBook =
  async (
    data: AddBookInput,
  ): Promise<BookModel> => {
    const ref = doc(
      collection(
        db,
        BOOKS_COLLECTION,
      ),
    );

    const payload = {
      ...data,
      id: ref.id,
      createAt:
        serverTimestamp(),
      updateAt:
        serverTimestamp(),
    };

    await setDoc(
      ref,
      payload,
    );

    return {
      ...data,
      id: ref.id,
      createAt:
        Timestamp.now(),
      updateAt:
        Timestamp.now(),
    } as BookModel;
  };

export const adminUpdateBook =
  async (
    id: string,
    updates: UpdateBookInput,
  ): Promise<void> => {
    await updateDoc(
      doc(
        db,
        BOOKS_COLLECTION,
        id,
      ),
      {
        ...updates,
        updateAt:
          serverTimestamp(),
      },
    );
  };

export const adminDeleteBook =
  async (
    id: string,
  ): Promise<void> => {
    await deleteDoc(
      doc(
        db,
        BOOKS_COLLECTION,
        id,
      ),
    );
  };

/* =====================================================
 * COURSES
 * ===================================================== */

export const adminGetAllCourses =
  async (): Promise<CourseModel[]> => {
    const snap = await getDocs(
      query(
        collection(
          db,
          COURSES_COLLECTION,
        ),
        orderBy(
          "sortOrder",
          "asc",
        ),
      ),
    );

    return snap.docs.map(
      (docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }),
    ) as CourseModel[];
  };

export const adminAddCourse =
  async (
    data: AddCourseInput,
  ): Promise<CourseModel> => {
    /**
     * courseId được dùng làm Document ID.
     * Ví dụ: courses/ancs-1
     */
    const ref = doc(
      db,
      COURSES_COLLECTION,
      data.courseId,
    );

    const payload = {
      ...data,
      id: data.courseId,
      createAt:
        serverTimestamp(),
      updateAt:
        serverTimestamp(),
    };

    await setDoc(
      ref,
      payload,
    );

    return {
      ...data,
      id: data.courseId,
      createAt:
        Timestamp.now(),
      updateAt:
        Timestamp.now(),
    } as CourseModel;
  };

export const adminUpdateCourse =
  async (
    id: string,
    updates: UpdateCourseInput,
  ): Promise<void> => {
    await updateDoc(
      doc(
        db,
        COURSES_COLLECTION,
        id,
      ),
      {
        ...updates,
        updateAt:
          serverTimestamp(),
      },
    );
  };

export const adminDeleteCourse =
  async (
    id: string,
  ): Promise<void> => {
    await deleteDoc(
      doc(
        db,
        COURSES_COLLECTION,
        id,
      ),
    );
  };

/* =====================================================
 * BOOK ORDERS
 * ===================================================== */

export const adminGetBookOrders =
  async (): Promise<
    BookOrderModel[]
  > => {
    const snap = await getDocs(
      query(
        collection(
          db,
          BOOK_ORDERS_COLLECTION,
        ),
        orderBy(
          "createAt",
          "desc",
        ),
      ),
    );

    return snap.docs.map(
      (docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }),
    ) as BookOrderModel[];
  };

export const adminUpdateBookOrder =
  async (
    id: string,
    updates: UpdateBookOrderInput,
  ): Promise<void> => {
    await updateDoc(
      doc(
        db,
        BOOK_ORDERS_COLLECTION,
        id,
      ),
      {
        ...updates,
        updateAt:
          serverTimestamp(),
      },
    );
  };

export const adminDeleteBookOrder =
  async (
    id: string,
  ): Promise<void> => {
    await deleteDoc(
      doc(
        db,
        BOOK_ORDERS_COLLECTION,
        id,
      ),
    );
  };
