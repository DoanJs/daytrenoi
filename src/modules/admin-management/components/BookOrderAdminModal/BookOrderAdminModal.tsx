import { useEffect, useMemo, useState } from "react";

import type {
  BookOrderModel,
  BookOrderStatus,
  UpdateBookOrderInput,
} from "../../types/admin.types";

import { formatMoney, formatTimestamp } from "../../utils/adminFormat";

import "../BookAdminModal/BookAdminModal.css";
import "./BookOrderAdminModal.css";

interface Props {
  order: BookOrderModel | null;

  onClose: () => void;

  onSave: (id: string, data: UpdateBookOrderInput) => Promise<void>;
}

const statusOptions: Array<{
  value: BookOrderStatus;
  label: string;
}> = [
  {
    value: "pending",
    label: "Chờ xác nhận",
  },
  {
    value: "confirmed",
    label: "Đã xác nhận",
  },
  {
    value: "shipping",
    label: "Đang giao",
  },
  {
    value: "completed",
    label: "Hoàn tất",
  },
  {
    value: "cancelled",
    label: "Đã hủy",
  },
];

export default function BookOrderAdminModal({ order, onClose, onSave }: Props) {
  const [form, setForm] = useState<BookOrderModel | null>(order);

  useEffect(() => {
    setForm(order);
  }, [order]);

  const totals = useMemo(() => {
    if (!form) {
      return {
        totalQuantity: 0,
        totalAmount: 0,
      };
    }

    return form.items.reduce(
      (result, item) => {
        result.totalQuantity += Number(item.quantity || 0);

        result.totalAmount +=
          Number(item.price || 0) * Number(item.quantity || 0);

        return result;
      },
      {
        totalQuantity: 0,
        totalAmount: 0,
      },
    );
  }, [form]);

  if (!form) return null;

  const updateItem = (
    index: number,
    key: "bookName" | "price" | "quantity",
    value: string | number,
  ) => {
    const items = [...form.items];

    items[index] = {
      ...items[index],
      [key]: value,
    };

    setForm({
      ...form,
      items,
    });
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
      <div className="admin-form-modal order-admin-modal">
        <div className="admin-modal-head">
          <div>
            <span>CHI TIẾT ĐƠN ĐẶT SÁCH</span>

            <h2>{form.orderCode}</h2>

            <p className="order-created-at">{formatTimestamp(form.createAt)}</p>
          </div>

          <button type="button" className="admin-modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="order-admin-top">
          <label>
            <span>Trạng thái</span>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value as BookOrderStatus,
                })
              }
            >
              {statusOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="zalo-confirm">
            <input
              type="checkbox"
              checked={form.zaloConnected}
              onChange={(e) =>
                setForm({
                  ...form,
                  zaloConnected: e.target.checked,
                })
              }
            />

            <span>
              <b>Đã nhận mã qua Zalo</b>

              <small>Tick sau khi khách chủ động gửi mã đơn.</small>
            </span>
          </label>
        </div>

        <div className="admin-form-grid">
          <label>
            <span>Khách hàng</span>

            <input
              value={form.customerName}
              onChange={(e) =>
                setForm({
                  ...form,
                  customerName: e.target.value,
                })
              }
            />
          </label>

          <label>
            <span>Số điện thoại</span>

            <input
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />
          </label>

          <label className="full">
            <span>Địa chỉ nhận</span>

            <input
              value={form.address}
              onChange={(e) =>
                setForm({
                  ...form,
                  address: e.target.value,
                })
              }
            />
          </label>

          <label className="full">
            <span>Ghi chú</span>

            <textarea
              rows={3}
              value={form.note || ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  note: e.target.value,
                })
              }
            />
          </label>
        </div>

        <div className="order-items-title">SÁCH TRONG ĐƠN</div>

        <div className="order-items-edit">
          {form.items.map((item, index) => (
            <div className="order-item-edit" key={`${item.bookId}-${index}`}>
              <label className="book-name">
                <span>Tên sách</span>

                <input
                  value={item.bookName}
                  onChange={(e) =>
                    updateItem(index, "bookName", e.target.value)
                  }
                />
              </label>

              <label>
                <span>Giá</span>

                <input
                  type="number"
                  min={0}
                  value={item.price}
                  onChange={(e) =>
                    updateItem(index, "price", Number(e.target.value))
                  }
                />
              </label>

              <label>
                <span>SL</span>

                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(
                      index,
                      "quantity",
                      Math.max(1, Number(e.target.value)),
                    )
                  }
                />
              </label>

              <div className="order-item-price">
                <span>Thành tiền</span>

                <b>{formatMoney(item.price * item.quantity)}</b>
              </div>
            </div>
          ))}
        </div>

        <div className="order-admin-total">
          <div>
            <span>Tổng số lượng</span>

            <b>{totals.totalQuantity}</b>
          </div>

          <div>
            <span>Tổng đơn</span>

            <strong>{formatMoney(totals.totalAmount)}</strong>
          </div>
        </div>

        <div className="admin-modal-actions">
          <button
            type="button"
            className="admin-btn secondary"
            onClick={onClose}
          >
            Đóng
          </button>

          <button
            type="button"
            className="admin-btn primary"
            onClick={() =>
              onSave(form.id, {
                customerName: form.customerName,
                phone: form.phone,
                address: form.address,
                items: form.items,
                note: form.note,
                status: form.status,
                zaloConnected: form.zaloConnected,
                totalQuantity: totals.totalQuantity,
                totalAmount: totals.totalAmount,
              } as UpdateBookOrderInput)
            }
          >
            Lưu đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
}
