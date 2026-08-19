import { FormEvent, useMemo, useState } from "react";
import "./BookOrderForm.css";
import { BookOrderFormProps } from "./BookOrderForm.types";

import {
  BookOrderModel,
  CreateBookOrderInput,
} from "../../models/BookOrderModel";

import LoadingOverlay from "../../../../components/LoadingOverlay/LoadingOverlay";
import { createBookOrderFirestore } from "../../services/bookOrderFirestoreRepository.example";
import "./BookOrderForm.css";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);

export default function BookOrderForm({
  book,
  zaloOaUrl,
  onClose,
  onCreateOrder,
  onOrderCreated,
}: BookOrderFormProps) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<BookOrderModel | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const totalAmount = useMemo(
    () => book.price * quantity,
    [book.price, quantity],
  );

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.floor(value || 1)));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!customerName.trim()) {
      return setError("Vui lòng nhập họ và tên.");
    }

    if (!phone.trim()) {
      return setError("Vui lòng nhập số điện thoại.");
    }

    if (!address.trim()) {
      return setError("Vui lòng nhập địa chỉ nhận sách.");
    }

    try {
      setIsSubmitting(true);
      setError("");

      const input: CreateBookOrderInput = {
        customerName: customerName.trim(),

        phone: phone.trim(),

        address: address.trim(),

        item: {
          bookId: book.bookId,

          bookName: book.bookName,

          price: book.price,

          quantity,

          coverUrl: book.coverUrl,
        },

        note: note.trim(),
      };

      // LƯU FIRESTORE
      const order = await createBookOrderFirestore(input);

      // Chỉ đến đây nếu Firestore lưu thành công
      setCreatedOrder(order);

      onOrderCreated?.(order);
    } catch (error) {
      console.error("createBookOrderFirestore error:", error);

      setError("Không thể tạo đơn hàng. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    if (!createdOrder) return;
    await navigator.clipboard.writeText(createdOrder.orderCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  if (createdOrder) {
    return (
      <div className="bo-success">
        <button type="button" className="bo-close" onClick={onClose}>
          ×
        </button>
        <div className="bo-success-icon">✓</div>
        <div className="bo-eyebrow">Đơn đặt sách đã được ghi nhận</div>
        <h2>Cảm ơn bạn đã đặt sách</h2>
        <p className="bo-success-desc">
          Đơn đã được lưu. Vui lòng gửi mã đơn qua Zalo để OWLSPEAKS xác nhận
          đúng tài khoản của bạn và gửi bill trực tiếp trong cuộc chat.
        </p>

        <div className="bo-order-code">
          <span>Mã đơn</span>
          <strong>{createdOrder.orderCode}</strong>
        </div>

        <div className="bo-confirm-summary">
          <div>
            <span>Sách</span>
            <b>{book.bookName}</b>
          </div>
          <div>
            <span>Số lượng</span>
            <b>{quantity}</b>
          </div>
          <div>
            <span>Tổng tiền</span>
            <b>{formatMoney(createdOrder.totalAmount)}</b>
          </div>
        </div>

        <button
          type="button"
          className="bo-btn bo-btn-copy"
          onClick={handleCopy}
        >
          {copied ? "✓ Đã sao chép mã" : `Sao chép ${createdOrder.orderCode}`}
        </button>

        <a
          className="bo-btn bo-btn-zalo"
          href={zaloOaUrl}
          target="_blank"
          rel="noreferrer"
        >
          💬 Mở Zalo để xác nhận & nhận bill
        </a>

        <div className="bo-zalo-note">
          Sau khi Zalo mở, khách chỉ cần dán mã <b>{createdOrder.orderCode}</b>{" "}
          và bấm Gửi. Admin sẽ tìm đúng đơn theo mã này.
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="bo-form" onSubmit={handleSubmit}>
        <button type="button" className="bo-close" onClick={onClose}>
          ×
        </button>
        <div className="bo-eyebrow">Thông tin đặt sách</div>
        <h2>Hoàn tất thông tin nhận sách</h2>
        <p className="bo-intro">
          Điền thông tin nhận sách và số lượng. Sau khi tạo đơn, hệ thống mới
          chuyển bạn sang Zalo để OWLSPEAKS xác nhận và gửi bill.
        </p>

        <div className="bo-book">
          <div className="bo-book-cover">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={book.bookName} />
            ) : (
              <span>📚</span>
            )}
          </div>
          <div className="bo-book-info">
            <b>{book.bookName}</b>
            <span>{formatMoney(book.price)}</span>
          </div>
          <div className="bo-book-total">
            <span>Tạm tính</span>
            <strong>{formatMoney(totalAmount)}</strong>
          </div>
        </div>

        <div className="bo-fields">
          <label>
            <span>
              Họ và tên <em>*</em>
            </span>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Nguyễn Thị Lan"
            />
          </label>

          <label>
            <span>
              Số điện thoại <em>*</em>
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              placeholder="0905 xxx xxx"
            />
          </label>

          <label className="bo-full">
            <span>
              Địa chỉ nhận sách <em>*</em>
            </span>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="36 Đặng Dung, Đà Nẵng"
            />
          </label>

          <label>
            <span>
              Số lượng <em>*</em>
            </span>
            <div className="bo-quantity">
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
              />
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </label>

          <div className="bo-total-box">
            <span>Tổng cộng</span>
            <strong>{formatMoney(totalAmount)}</strong>
          </div>

          <label className="bo-full">
            <span>Ghi chú</span>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ví dụ: giao giờ hành chính..."
            />
          </label>
        </div>

        {error ? <div className="bo-error">{error}</div> : null}

        <button type="submit" className="bo-submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang tạo đơn..." : "💬 Đặt sách & xác nhận qua Zalo"}
        </button>

        <p className="bo-policy">
          Đơn được lưu trước khi mở Zalo. Zalo dùng để xác nhận đúng người đặt
          và gửi bill.
        </p>
      </form>

      <LoadingOverlay show={isSubmitting} text="Đang tạo đơn hàng..." />
    </>
  );
}
