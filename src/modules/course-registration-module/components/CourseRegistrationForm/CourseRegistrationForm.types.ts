import {
  CourseRegistrationModel,
  CreateCourseRegistrationInput,
  SelectedCourse,
} from "../../models/CourseRegistrationModel";

export interface CourseRegistrationFormProps {
  course: SelectedCourse;
  zaloOaUrl: string;
  onClose: () => void;
  onCreateRegistration?: (
    input: CreateCourseRegistrationInput,
  ) => Promise<CourseRegistrationModel>;
  onRegistrationCreated?: (
    registration: CourseRegistrationModel,
  ) => void;
}
