import { useEffect, useState } from "react";

import type { AddCourseInput, CourseModel } from "../../types/admin.types";

import "./CourseAdminModal.css";

interface Props {
  course: CourseModel | null;

  open: boolean;

  onClose: () => void;

  onSave: (data: AddCourseInput, courseImgFile: any) => Promise<void>;
}

const createEmpty = (): AddCourseInput =>
  ({
    courseId: "",
    title: "",
    schedule: "",
    location: "",
    tuitionFee: 0,
    earlyBirdFee: 0,
    earlyBirdDeadline: "",
    registerUrl: "",
    giftsRemaining: 0,
    giftDescription: "",
    note: "",
    isActive: true,
    sortOrder: 1,
    coverUrl: "",
  }) as AddCourseInput;

export default function CourseAdminModal({
  course,
  open,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<AddCourseInput>(createEmpty());
  const [courseImgFile, setCourseImgFile] = useState<File | null>(null);
  const [courseImgPreview, setCourseImgPreview] = useState("");

  useEffect(() => {
    if (course) {
      const { id, createAt, updateAt, ...editable } = course;

      setForm(editable as AddCourseInput);
      setCourseImgPreview(editable.coverUrl)
    } else {
      setForm(createEmpty());
    }
  }, [course, open]);
  
  if (!open) return null;

  const setValue = (key: keyof AddCourseInput, value: unknown) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };
  const handleBookImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCourseImgFile(file);
    setCourseImgPreview(URL.createObjectURL(file));
  };

  return (
    <div
      className="admin-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="admin-form-modal course-admin-modal">
        <div className="admin-modal-head">
          <div>
            <span>{course ? "CHỈNH SỬA KHÓA HỌC" : "THÊM KHÓA HỌC"}</span>

            <h2>{course ? course.title : "Tạo khóa học mới"}</h2>
          </div>

          <button type="button" className="admin-modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="admin-form-grid">
          <label>
            <span>Course ID *</span>

            <input
              disabled={Boolean(course)}
              value={String(form.courseId || "")}
              onChange={(e) => setValue("courseId", e.target.value)}
              placeholder="ancs-1"
            />
          </label>

          <label>
            <span>Thứ tự</span>

            <input
              type="number"
              value={Number(form.sortOrder || 0)}
              onChange={(e) => setValue("sortOrder", Number(e.target.value))}
            />
          </label>

          <label className="full">
            <span>Tên khóa *</span>

            <input
              value={String(form.title || "")}
              onChange={(e) => setValue("title", e.target.value)}
            />
          </label>

          <label>
            <span>Lịch học</span>

            <input
              value={String(form.schedule || "")}
              onChange={(e) => setValue("schedule", e.target.value)}
              placeholder="15–16/09/2026"
            />
          </label>

          <label>
            <span>Địa điểm</span>

            <input
              value={String(form.location || "")}
              onChange={(e) => setValue("location", e.target.value)}
              placeholder="Hà Nội"
            />
          </label>

          <label>
            <span>Học phí</span>

            <input
              type="number"
              min={0}
              value={Number(form.tuitionFee || 0)}
              onChange={(e) => setValue("tuitionFee", Number(e.target.value))}
            />
          </label>

          <label>
            <span>Học phí ưu đãi</span>

            <input
              type="number"
              min={0}
              value={Number(form.earlyBirdFee || 0)}
              onChange={(e) => setValue("earlyBirdFee", Number(e.target.value))}
            />
          </label>

          <label>
            <span>Hạn ưu đãi</span>

            <input
              value={String(form.earlyBirdDeadline || "")}
              onChange={(e) => setValue("earlyBirdDeadline", e.target.value)}
              placeholder="05/09/2026"
            />
          </label>

          <label>
            <span>Số quà còn lại</span>

            <input
              type="number"
              min={0}
              value={Number(form.giftsRemaining || 0)}
              onChange={(e) =>
                setValue("giftsRemaining", Number(e.target.value))
              }
            />
          </label>

          <label className="full">
            <span>Link đăng ký</span>

            <input
              value={String(form.registerUrl || "")}
              onChange={(e) => setValue("registerUrl", e.target.value)}
            />
          </label>

          <label className="full">
            <span>Quà tặng đi kèm</span>

            <input
              value={String(form.giftDescription || "")}
              onChange={(e) => setValue("giftDescription", e.target.value)}
            />
          </label>

          <label className="full">
            <span>Ghi chú</span>

            <textarea
              rows={4}
              value={String(form.note || "")}
              onChange={(e) => setValue("note", e.target.value)}
            />
          </label>
          <label className="full">
            <span>Ảnh minh họa</span>

            <div className="text-center d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  courseImgPreview || "/images/speech-therapy-owl-d5c2c84c.png"
                }
                className="admin-child-avatar me-3"
                alt="avatar"
                style={{
                  height: "100px",
                }}
              />

              <input
                type="file"
                id="childAvatar"
                hidden
                accept="image/*"
                onChange={handleBookImgChange}
              />

              <label htmlFor="childAvatar" className="btn btn-light mt-2">
                <i className="bi bi-camera me-2"></i>
                Đổi ảnh
              </label>
            </div>
          </label>

          <label className="admin-check full">
            <input
              type="checkbox"
              checked={Boolean(form.isActive)}
              onChange={(e) => setValue("isActive", e.target.checked)}
            />

            <span>Hiển thị khóa học trên website</span>
          </label>
        </div>

        <div className="admin-modal-actions">
          <button
            type="button"
            className="admin-btn secondary"
            onClick={onClose}
          >
            Hủy
          </button>

          <button
            type="button"
            className="admin-btn primary"
            onClick={async () => {
              await onSave(form, courseImgFile);
              setCourseImgFile(null);
              setCourseImgPreview("");
            }}
          >
            {course ? "Lưu thay đổi" : "Thêm khóa học"}
          </button>
        </div>
      </div>
    </div>
  );
}
