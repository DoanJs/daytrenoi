import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import {
  CourseRegistrationModel,
  CreateCourseRegistrationInput,
} from "../models/CourseRegistrationModel";

const COLLECTION_NAME = "courseRegistrations";

const createRegistrationCode = () => {
  const now = new Date();
  const datePart = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `DK-${datePart}-${randomPart}`;
};

const isEarlyBirdAvailable = (fee?: number, deadline?: string) => {
  if (!fee || fee <= 0) return false;
  if (!deadline) return true;

  const date = new Date(`${deadline}T23:59:59`);
  if (Number.isNaN(date.getTime())) return true;
  return new Date() <= date;
};

export const createCourseRegistrationFirestore = async (
  input: CreateCourseRegistrationInput,
): Promise<CourseRegistrationModel> => {
  const ref = doc(collection(db, COLLECTION_NAME));
  const registrationCode = createRegistrationCode();

  const earlyBirdApplied = isEarlyBirdAvailable(
    input.course.earlyBirdFee,
    input.course.earlyBirdDeadline,
  );

  const appliedFee =
    earlyBirdApplied && input.course.earlyBirdFee
      ? input.course.earlyBirdFee
      : input.course.tuitionFee;

  const payload = {
    id: ref.id,
    registrationCode,
    courseId: input.course.courseId,
    courseTitle: input.course.courseTitle,
    customerName: input.customerName.trim(),
    phone: input.phone.trim(),
    email: input.email?.trim() || "",
    organization: input.organization?.trim() || "",
    note: input.note?.trim() || "",
    schedule: input.course.schedule,
    location: input.course.location,
    tuitionFee: input.course.tuitionFee,
    appliedFee,
    earlyBirdApplied,
    earlyBirdDeadline: input.course.earlyBirdDeadline || "",
    giftsRemainingAtRegister: input.course.giftsRemaining ?? 0,
    giftDescription: input.course.giftDescription || "",
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
