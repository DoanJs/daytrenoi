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
import { CourseModel } from "../models/site";

const COLLECTION_NAME = "courses";

/**
 * Khi thêm course:
 * - id sẽ chính là document ID
 * - createAt / updateAt do service tự tạo
 */
export type AddCourseInput = Omit<
  CourseModel,
  "id" | "createAt" | "updateAt"
>;

/**
 * Khi update không cho sửa:
 * - id
 * - createAt
 * - updateAt
 */
export type UpdateCourseInput = Partial<
  Omit<
    CourseModel,
    "id" | "createAt" | "updateAt"
  >
>;

/**
 * =====================================================
 * 1. Lấy danh sách course đang active
 * =====================================================
 */
export const getCourses =
  async (): Promise<CourseModel[]> => {
    const q = query(
      collection(
        db,
        COLLECTION_NAME
      ),

      where(
        "isActive",
        "==",
        true
      ),

      orderBy(
        "sortOrder",
        "asc"
      )
    );

    const snapshot =
      await getDocs(q);

    return snapshot.docs.map(
      (docSnap) => ({
        id: docSnap.id,

        ...docSnap.data(),
      })
    ) as CourseModel[];
  };

/**
 * =====================================================
 * 2. Lấy toàn bộ course
 *
 * Dùng cho Admin.
 * Bao gồm isActive = false
 * =====================================================
 */
export const getAllCourses =
  async (): Promise<CourseModel[]> => {
    const q = query(
      collection(
        db,
        COLLECTION_NAME
      ),

      orderBy(
        "sortOrder",
        "asc"
      )
    );

    const snapshot =
      await getDocs(q);

    return snapshot.docs.map(
      (docSnap) => ({
        id: docSnap.id,

        ...docSnap.data(),
      })
    ) as CourseModel[];
  };

/**
 * =====================================================
 * 3. Lấy một course theo ID
 *
 * VD:
 * getCourse("ancs-1")
 *
 * Firestore:
 * courses/ancs-1
 * =====================================================
 */
export const getCourse =
  async (
    id: string
  ): Promise<CourseModel | null> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
      id
    );

    const snapshot =
      await getDoc(ref);

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,

      ...snapshot.data(),
    } as CourseModel;
  };

/**
 * =====================================================
 * 4. Thêm course
 *
 * Ở đây dùng courseId làm document ID.
 *
 * VD:
 * courseId = "ancs-1"
 *
 * sẽ tạo:
 * courses/ancs-1
 * =====================================================
 */
export const addCourse =
  async (
    data: AddCourseInput
  ): Promise<CourseModel> => {
    /**
     * Vì courseId là cố định,
     * dùng courseId làm document ID.
     */
    const ref = doc(
      db,
      COLLECTION_NAME,
      data.courseId
    );

    const payload = {
      ...data,

      id:
        data.courseId,

      createAt:
        serverTimestamp(),

      updateAt:
        serverTimestamp(),
    };

    await setDoc(
      ref,
      payload
    );

    /**
     * serverTimestamp chưa resolve ngay ở client,
     * nên trả Timestamp.now() để UI dùng ngay.
     */
    return {
      ...data,

      id:
        data.courseId,

      createAt:
        Timestamp.now(),

      updateAt:
        Timestamp.now(),
    };
  };

/**
 * =====================================================
 * 5. Cập nhật course
 * =====================================================
 */
export const updateCourse =
  async (
    id: string,
    updates: UpdateCourseInput
  ): Promise<void> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
      id
    );

    await updateDoc(
      ref,
      {
        ...updates,

        updateAt:
          serverTimestamp(),
      }
    );
  };

/**
 * =====================================================
 * 6. Xóa course
 * =====================================================
 */
export const deleteCourse =
  async (
    id: string
  ): Promise<void> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
      id
    );

    await deleteDoc(ref);
  };