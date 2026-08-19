import {
  useMemo,
  useState,
} from "react";

import type {
  AddCourseInput,
  CourseModel,
} from "../../types/admin.types";

import {
  formatMoney,
} from "../../utils/adminFormat";

import CourseAdminModal
  from "../../components/CourseAdminModal/CourseAdminModal";

import AdminConfirmModal
  from "../../components/AdminConfirmModal/AdminConfirmModal";

interface Props {
  courses: CourseModel[];

  onAdd: (
    data: AddCourseInput,
  ) => Promise<void>;

  onUpdate: (
    id: string,
    data: AddCourseInput,
  ) => Promise<void>;

  onDelete: (
    id: string,
  ) => Promise<void>;
}

export default function AdminCourses({
  courses,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const [
    search,
    setSearch,
  ] = useState("");

  const [
    editing,
    setEditing,
  ] =
    useState<CourseModel | null>(
      null,
    );

  const [
    formOpen,
    setFormOpen,
  ] = useState(false);

  const [
    deleteTarget,
    setDeleteTarget,
  ] =
    useState<CourseModel | null>(
      null,
    );

  const filtered = useMemo(() => {
    const keyword =
      search
        .trim()
        .toLowerCase();

    return courses.filter(
      (course) =>
        [
          course.courseId,
          course.title,
          course.location,
        ]
          .join(" ")
          .toLowerCase()
          .includes(
            keyword,
          ),
    );
  }, [
    courses,
    search,
  ]);

  const handleSave =
    async (
      data: AddCourseInput,
    ) => {
      if (editing) {
        await onUpdate(
          editing.id,
          data,
        );
      } else {
        await onAdd(
          data,
        );
      }

      setFormOpen(
        false,
      );

      setEditing(
        null,
      );
    };

  return (
    <>
      <div className="admin-page-header">
        <div>
          <div className="eyebrow">
            Courses
          </div>

          <h1>
            Lịch & học phí khóa học
          </h1>

          <p>
            Quản lý lịch mở lớp, học phí, ưu đãi, quà tặng và link đăng ký.
          </p>
        </div>

        <button
          type="button"
          className="admin-btn primary"
          onClick={() => {
            setEditing(
              null,
            );

            setFormOpen(
              true,
            );
          }}
        >
          + Thêm khóa học
        </button>
      </div>

      <div className="admin-toolbar">
        <input
          className="admin-search"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value,
            )
          }
          placeholder="Tìm courseId, tên khóa, địa điểm..."
        />

        <select className="admin-filter">
          <option>
            {courses.length} khóa học
          </option>
        </select>
      </div>

      <div className="admin-course-list">
        {filtered.map(
          (course) => (
            <div
              className="admin-course-row"
              key={
                course.id
              }
            >
              <div className="admin-course-code">
                {
                  course.courseId
                }
              </div>

              <div className="admin-course-main">
                <b>
                  {
                    course.title
                  }
                </b>

                <span>
                  {
                    course.schedule
                  }
                  {" · "}
                  {
                    course.location
                  }
                </span>

                <span>
                  🎁 Còn{" "}
                  {
                    course.giftsRemaining ??
                    0
                  }{" "}
                  quà
                </span>
              </div>

              <div className="admin-course-price">
                <b>
                  {formatMoney(
                    course.tuitionFee,
                  )}
                </b>

                {course.earlyBirdFee ? (
                  <small>
                    Ưu đãi{" "}
                    {formatMoney(
                      course.earlyBirdFee,
                    )}
                  </small>
                ) : null}
              </div>

              <div>
                <span
                  className={`admin-badge ${
                    course.isActive
                      ? "active"
                      : ""
                  }`}
                >
                  {course.isActive
                    ? "Đang mở"
                    : "Đã ẩn"}
                </span>

                <br />

                <button
                  type="button"
                  className="admin-action-link"
                  onClick={() => {
                    setEditing(
                      course,
                    );

                    setFormOpen(
                      true,
                    );
                  }}
                >
                  Sửa
                </button>

                {" · "}

                <button
                  type="button"
                  className="admin-action-link danger"
                  onClick={() =>
                    setDeleteTarget(
                      course,
                    )
                  }
                >
                  Xóa
                </button>
              </div>
            </div>
          ),
        )}
      </div>

      <CourseAdminModal
        open={formOpen}
        course={editing}
        onClose={() => {
          setFormOpen(
            false,
          );

          setEditing(
            null,
          );
        }}
        onSave={
          handleSave
        }
      />

      <AdminConfirmModal
        open={
          Boolean(
            deleteTarget,
          )
        }
        title="Xóa khóa học?"
        description={`Bạn có chắc muốn xóa "${deleteTarget?.title || ""}"?`}
        onClose={() =>
          setDeleteTarget(
            null,
          )
        }
        onConfirm={async () => {
          if (
            !deleteTarget
          ) {
            return;
          }

          await onDelete(
            deleteTarget.id,
          );

          setDeleteTarget(
            null,
          );
        }}
      />
    </>
  );
}
