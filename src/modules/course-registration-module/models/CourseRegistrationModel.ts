import { Timestamp } from "firebase/firestore";

export type CourseRegistrationStatus =
  | "pending"
  | "confirmed"
  | "paid"
  | "completed"
  | "cancelled";

export interface SelectedCourse {
  courseId: string;
  courseTitle: string;
  coverUrl?: string;
  schedule: string;
  location: string;
  tuitionFee: number;
  earlyBirdFee?: number;
  earlyBirdDeadline?: string;
  giftsRemaining?: number;
  giftDescription?: string;
}

export interface CourseRegistrationModel {
  id: string;
  registrationCode: string;
  courseId: string;
  courseTitle: string;
  customerName: string;
  phone: string;
  email?: string;
  organization?: string;
  note?: string;
  schedule: string;
  location: string;
  tuitionFee: number;
  appliedFee: number;
  earlyBirdApplied: boolean;
  earlyBirdDeadline?: string;
  giftsRemainingAtRegister?: number;
  giftDescription?: string;
  status: CourseRegistrationStatus;
  zaloConnected: boolean;
  createAt: Timestamp;
  updateAt: Timestamp;
}

export interface CreateCourseRegistrationInput {
  course: SelectedCourse;
  customerName: string;
  phone: string;
  email?: string;
  organization?: string;
  note?: string;
}
