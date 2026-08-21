import {
  CourseRegistrationModel,
  CreateCourseRegistrationInput,
} from "../models/CourseRegistrationModel";
import { createCourseRegistrationFirestore } from "./courseRegistrationFirestoreRepository";

export const createCourseRegistration = async (
  input: CreateCourseRegistrationInput,
): Promise<CourseRegistrationModel> => {
  return createCourseRegistrationFirestore(input);
};
