import { FormEvent, useMemo, useState } from "react";
import { CourseRegistrationModel } from "../../models/CourseRegistrationModel";
import { createCourseRegistration } from "../../services/courseRegistrationRepository";
import "./CourseRegistrationForm.css";
import { CourseRegistrationFormProps } from "./CourseRegistrationForm.types";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);

const isValidEmail = (value: string) => {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

const isEarlyBirdAvailable = (fee?: number, deadline?: string) => {
  if (!fee || fee <= 0) return false;
  if (!deadline) return true;
  const date = new Date(`${deadline}T23:59:59`);
  if (Number.isNaN(date.getTime())) return true;
  return new Date() <= date;
};

export default function CourseRegistrationForm({
  course,
  zaloOaUrl,
  onClose,
  onCreateRegistration,
  onRegistrationCreated,
}: CourseRegistrationFormProps) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdRegistration, setCreatedRegistration] =
    useState<CourseRegistrationModel | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const earlyBirdApplied = useMemo(
    () => isEarlyBirdAvailable(course.earlyBirdFee, course.earlyBirdDeadline),
    [course.earlyBirdFee, course.earlyBirdDeadline],
  );

  const appliedFee =
    earlyBirdApplied && course.earlyBirdFee
      ? course.earlyBirdFee
      : course.tuitionFee;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!customerName.trim()) return setError("Vui lòng nhập họ và tên.");
    if (!phone.trim()) return setError("Vui lòng nhập số điện thoại.");
    if (!isValidEmail(email)) return setError("Email không đúng định dạng.");

    try {
      setIsSubmitting(true);
      setError("");

      const input = {
        course,
        customerName,
        phone,
        email,
        organization,
        note,
      };

      const registration = onCreateRegistration
        ? await onCreateRegistration(input)
        : await createCourseRegistration(input);

      setCreatedRegistration(registration);
      onRegistrationCreated?.(registration);
    } catch (e) {
      console.error(e);
      setError("Không thể tạo đăng ký. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    if (!createdRegistration) return;
    await navigator.clipboard.writeText(createdRegistration.registrationCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  if (createdRegistration) {
    return (
      <div className="cr-success">
        <button type="button" className="cr-close" onClick={onClose}>×</button>
        <div className="cr-success-icon">✓</div>
        <div className="cr-eyebrow">Đăng ký đã được ghi nhận</div>
        <h2>Cảm ơn bạn đã đăng ký</h2>
        <p className="cr-success-desc">
          Thông tin đã được lưu. Vui lòng gửi mã đăng ký qua Zalo để OWLSPEAKS xác nhận suất học và gửi hướng dẫn thanh toán.
        </p>

        <div className="cr-code">
          <span>Mã đăng ký</span>
          <strong>{createdRegistration.registrationCode}</strong>
        </div>

        <div className="cr-confirm-summary">
          <div><span>Khóa học</span><b>{course.courseTitle}</b></div>
          <div><span>Lịch học</span><b>{course.schedule}</b></div>
          <div><span>Địa điểm</span><b>{course.location}</b></div>
          <div><span>Học phí</span><b>{formatMoney(createdRegistration.appliedFee)}</b></div>
        </div>

        <button type="button" className="cr-btn cr-btn-copy" onClick={handleCopy}>
          {copied ? "✓ Đã sao chép mã" : `Sao chép ${createdRegistration.registrationCode}`}
        </button>

        <a className="cr-btn cr-btn-zalo" href={zaloOaUrl} target="_blank" rel="noreferrer">
          💬 Mở Zalo để xác nhận đăng ký
        </a>

        <div className="cr-zalo-note">
          Sau khi Zalo mở, bạn chỉ cần dán mã <b>{createdRegistration.registrationCode}</b> và bấm Gửi. Admin sẽ tìm đúng đăng ký theo mã này.
        </div>
      </div>
    );
  }

  return (
    <form className="cr-form" onSubmit={handleSubmit}>
      <button type="button" className="cr-close" onClick={onClose}>×</button>
      <div className="cr-eyebrow">Đăng ký khóa học</div>
      <h2>Hoàn tất thông tin đăng ký</h2>
      <p className="cr-intro">
        Điền thông tin của bạn. Sau khi tạo đăng ký, hệ thống mới chuyển sang Zalo để xác nhận suất học và gửi hướng dẫn thanh toán.
      </p>

      <div className="cr-course">
        <div className="cr-course-cover">
          {course.coverUrl ? <img src={course.coverUrl} alt={course.courseTitle} /> : <span>🎓</span>}
        </div>
        <div className="cr-course-info">
          <b>{course.courseTitle}</b>
          <span>{course.schedule}</span>
          <span>{course.location}</span>
        </div>
        <div className="cr-course-price">
          {earlyBirdApplied && course.earlyBirdFee ? (
            <>
              <small>Ưu đãi{course.earlyBirdDeadline ? ` trước ${course.earlyBirdDeadline}` : ""}</small>
              <strong>{formatMoney(course.earlyBirdFee)}</strong>
              <del>{formatMoney(course.tuitionFee)}</del>
            </>
          ) : (
            <><small>Học phí</small><strong>{formatMoney(course.tuitionFee)}</strong></>
          )}
        </div>
      </div>

      {typeof course.giftsRemaining === "number" && course.giftsRemaining > 0 ? (
        <div className="cr-gift">
          🎁 Chỉ còn <b>{course.giftsRemaining}</b> quà tặng đi kèm
          {course.giftDescription ? ` — ${course.giftDescription}` : ""}
        </div>
      ) : null}

      <div className="cr-fields">
        <label><span>Họ và tên <em>*</em></span><input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Nguyễn Thị Lan" /></label>
        <label><span>Số điện thoại <em>*</em></span><input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="0905 xxx xxx" /></label>
        <label><span>Email</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" /></label>
        <label><span>Đơn vị công tác</span><input value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Trường / Trung tâm / Đơn vị..." /></label>
        <label className="cr-full"><span>Ghi chú</span><textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Nội dung cần hỗ trợ thêm..." /></label>
      </div>

      <div className="cr-total"><span>Học phí đăng ký</span><strong>{formatMoney(appliedFee)}</strong></div>
      {error ? <div className="cr-error">{error}</div> : null}

      <button type="submit" className="cr-submit" disabled={isSubmitting}>
        {isSubmitting ? "Đang ghi nhận đăng ký..." : "Đăng ký & xác nhận qua Zalo"}
      </button>

      <p className="cr-policy">
        Thông tin đăng ký được lưu trước khi mở Zalo. Zalo dùng để xác nhận đúng người đăng ký, giữ suất học và gửi hướng dẫn thanh toán.
      </p>
    </form>
  );
}
