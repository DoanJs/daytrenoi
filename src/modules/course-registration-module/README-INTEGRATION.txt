1) Copy folder vào src/modules/course-registration/

2) Import trong CoursesPage.tsx:

import {
  CourseRegistrationForm,
  SelectedCourse,
} from "../../modules/course-registration";

3) State:

const [selectedCourseForRegister, setSelectedCourseForRegister] =
  useState<SelectedCourse | null>(null);

4) Nút đăng ký:

<button
  type="button"
  className="btn p"
  onClick={() =>
    setSelectedCourseForRegister({
      courseId: course.id,
      courseTitle: course.title,
      coverUrl: course.coverUrl,
      schedule: course.schedule,
      location: course.location,
      tuitionFee: course.tuitionFee,
      earlyBirdFee: course.earlyBirdFee,
      earlyBirdDeadline: course.earlyBirdDeadline,
      giftsRemaining: course.giftsRemaining,
      giftDescription: course.giftDescription,
    })
  }
>
  Đăng ký khóa học
</button>

5) Modal cuối CoursesPage:

{selectedCourseForRegister && (
  <div
    className="course-registration-overlay"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        setSelectedCourseForRegister(null);
      }
    }}
  >
    <div className="course-registration-popup">
      <CourseRegistrationForm
        course={selectedCourseForRegister}
        zaloOaUrl="https://zalo.me/0866620583"
        onClose={() => setSelectedCourseForRegister(null)}
        onRegistrationCreated={(registration) => {
          console.log("Đã đăng ký khóa học:", registration);
        }}
      />
    </div>
  </div>
)}

6) Thêm vào CoursesPage.css:

.course-registration-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(36, 28, 22, 0.6);
  backdrop-filter: blur(4px);
  overflow-y: auto;
}

.course-registration-popup {
  position: relative;
  width: 100%;
  max-width: 760px;
  margin: auto;
}

7) Firestore collection: courseRegistrations

8) Service đang import db từ ../../../firebase.config.
Nếu firebase.config.ts của project ở chỗ khác thì sửa path này.
