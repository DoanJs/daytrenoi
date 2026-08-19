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

import { db } from "../../../firebase.config";

import {
  AddCourseEnrollmentInput,
  CourseEnrollmentModel,
  UpdateCourseEnrollmentInput,
} from "../models/CourseEnrollmentModel";

const COLLECTION_NAME = "courses";

/**
 * Lấy tất cả lịch khóa học đang active.
 * Dùng cho web nếu bạn muốn preload toàn bộ.
 */
export const getCourseEnrollments =
  async (): Promise<CourseEnrollmentModel[]> => {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("isActive", "==", true),
      orderBy("sortOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as CourseEnrollmentModel[];
  };

/**
 * Lấy toàn bộ khóa học, kể cả isActive=false.
 * Dùng cho Admin.
 */
export const getAllCourseEnrollments =
  async (): Promise<CourseEnrollmentModel[]> => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("sortOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as CourseEnrollmentModel[];
  };

/**
 * Lấy đúng một khóa theo courseId.
 *
 * Module đề xuất document ID = courseId,
 * ví dụ:
 *
 * courses/ancs-1
 * courses/choi-2
 * courses/mxlh-4
 *
 * Nên chỉ cần getDoc(), không phải query where().
 */
export const getCourseEnrollment =
  async (
    courseId: string,
  ): Promise<CourseEnrollmentModel | null> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
      courseId,
    );

    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data();

    if (data.isActive === false) {
      return null;
    }

    return {
      id: snapshot.id,
      ...data,
    } as CourseEnrollmentModel;
  };

/**
 * Thêm khóa.
 *
 * Dùng courseId làm document ID để tránh phải query khi khách click.
 */
export const addCourseEnrollment =
  async (
    data: AddCourseEnrollmentInput,
  ): Promise<CourseEnrollmentModel> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
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
    };
  };

/**
 * Cập nhật lịch/học phí/ưu đãi.
 */
export const updateCourseEnrollment =
  async (
    courseId: string,
    updates: UpdateCourseEnrollmentInput,
  ): Promise<void> => {
    const ref = doc(
      db,
      COLLECTION_NAME,
      courseId,
    );

    await updateDoc(
      ref,
      {
        ...updates,

        updateAt:
          serverTimestamp(),
      },
    );
  };

/**
 * Xóa document.
 *
 * Thực tế tôi khuyên thường dùng:
 * updateCourseEnrollment(id, { isActive: false })
 * thay vì delete.
 */
export const deleteCourseEnrollment =
  async (
    courseId: string,
  ): Promise<void> => {
    await deleteDoc(
      doc(
        db,
        COLLECTION_NAME,
        courseId,
      ),
    );
  };
