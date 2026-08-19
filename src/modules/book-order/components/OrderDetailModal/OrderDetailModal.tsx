import { BookOrderModel, BookOrderStatus } from "../../models/BookOrderModel";
import "./OrderDetailModal.css";

interface Props {
  order: BookOrderModel | null;
  onClose: () => void;
  onStatusChange?: (id: string, status: BookOrderStatus) => Promise<void> | void;
  onZaloConnectedChange?: (id: string, connected: boolean) => Promise<void> | void;
}

const statusLabels: Record<BookOrderStatus, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  completed: "Hoàn tất",
  cancelled: "Đã hủy",
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

export default function OrderDetailModal({
  order,
  onClose,
  onStatusChange,
  onZaloConnectedChange,
}: Props) {
  if (!order) return null;

  return (
    <div className="bo-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bo-modal">
        <div className="bo-modal-head">
          <div><span>CHI TIẾT ĐƠN HÀNG</span><h2>{order.orderCode}</h2></div>
          <button type="button" onClick={onClose}>×</button>
        </div>

        <div className="bo-modal-grid">
          <section>
            <h3>Thông tin nhận sách</h3>
            <dl>
              <div><dt>Họ tên</dt><dd>{order.customerName}</dd></div>
              <div><dt>SĐT</dt><dd>{order.phone}</dd></div>
              <div><dt>Địa chỉ</dt><dd>{order.address}</dd></div>
              <div><dt>Ghi chú</dt><dd>{order.note || "—"}</dd></div>
            </dl>
          </section>

          <section>
            <h3>Xử lý đơn</h3>
            <label>
              <span>Trạng thái</span>
              <select value={order.status} onChange={(e) => onStatusChange?.(order.id, e.target.value as BookOrderStatus)}>
                {(Object.keys(statusLabels) as BookOrderStatus[]).map((status) => (
                  <option key={status} value={status}>{statusLabels[status]}</option>
                ))}
              </select>
            </label>

            <label className="bo-zalo-check">
              <input
                type="checkbox"
                checked={order.zaloConnected}
                onChange={(e) => onZaloConnectedChange?.(order.id, e.target.checked)}
              />
              <span><b>Đã nhận mã đơn qua Zalo</b><small>Tick khi khách đã chủ động nhắn mã đơn vào OA.</small></span>
            </label>
          </section>
        </div>

        <section className="bo-modal-product">
          <h3>Sách đặt</h3>
          {order.items.map((item) => (
            <div key={item.bookId}>
              <div><b>{item.bookName}</b><span>{formatMoney(item.price)} × {item.quantity}</span></div>
              <strong>{formatMoney(item.price * item.quantity)}</strong>
            </div>
          ))}
          <footer><span>Tổng {order.totalQuantity} cuốn</span><strong>{formatMoney(order.totalAmount)}</strong></footer>
        </section>
      </div>
    </div>
  );
}
