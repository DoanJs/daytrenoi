import { useMemo, useState } from "react";

import type {
  BookOrderModel,
  BookOrderStatus,
  UpdateBookOrderInput,
} from "../../types/admin.types";

import { formatMoney, formatTimestamp } from "../../utils/adminFormat";

import BookOrderAdminModal from "../../components/BookOrderAdminModal/BookOrderAdminModal";

import AdminConfirmModal from "../../components/AdminConfirmModal/AdminConfirmModal";

const statusLabel: Record<BookOrderStatus, string> = {
  pending: "Chờ xác nhận",

  confirmed: "Đã xác nhận",

  shipping: "Đang giao",

  completed: "Hoàn tất",

  cancelled: "Đã hủy",
};

interface Props {
  orders: BookOrderModel[];

  onUpdate: (id: string, data: UpdateBookOrderInput) => Promise<void>;

  onDelete: (id: string) => Promise<void>;
}

export default function AdminBookOrders({ orders, onUpdate, onDelete }: Props) {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<"all" | BookOrderStatus>("all");

  const [selected, setSelected] = useState<BookOrderModel | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<BookOrderModel | null>(null);

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchText = [
        order.orderCode,
        order.customerName,
        order.phone,
        order.address,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);

      const matchStatus = status === "all" || order.status === status;

      return matchText && matchStatus;
    });
  }, [orders, search, status]);

  return (
    <>
      <div className="admin-page-header">
        <div>
          <div className="eyebrow">Book Orders</div>

          <h1>Đơn đặt sách</h1>

          <p>Xác nhận khách từ Zalo, chỉnh đơn và theo dõi trạng thái xử lý.</p>
        </div>
      </div>

      <div className="admin-toolbar">
        <input
          className="admin-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm mã đơn, tên khách, SĐT..."
        />

        <select
          className="admin-filter"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | BookOrderStatus)}
        >
          <option value="all">Tất cả trạng thái</option>

          <option value="pending">Chờ xác nhận</option>

          <option value="confirmed">Đã xác nhận</option>

          <option value="shipping">Đang giao</option>

          <option value="completed">Hoàn tất</option>

          <option value="cancelled">Đã hủy</option>
        </select>
      </div>

      <div className="admin-orders-table">
        <table>
          <thead>
            <tr>
              <th>Mã đơn</th>

              <th>Khách</th>

              <th>Sách</th>

              <th>Tổng</th>

              <th>Zalo</th>

              <th>Trạng thái</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="admin-order-code">{order.orderCode}</span>

                  <small>{formatTimestamp(order.createAt)}</small>
                </td>

                <td>
                  <b>{order.customerName}</b>

                  <small>{order.phone}</small>
                </td>

                <td>
                  <b>{order.items[0]?.bookName || "—"}</b>

                  <small>{order.totalQuantity} cuốn</small>
                </td>

                <td className="admin-order-money">
                  {formatMoney(order.totalAmount)}
                </td>

                <td>
                  <span
                    className={`admin-badge ${
                      order.zaloConnected ? "active" : ""
                    }`}
                  >
                    {order.zaloConnected ? "✓ Đã nhắn" : "Chưa nhắn"}
                  </span>
                </td>

                <td>
                  <span className={`admin-status ${order.status}`}>
                    {statusLabel[order.status]}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className="admin-action-link"
                    onClick={() => setSelected(order)}
                  >
                    Chi tiết
                  </button>

                  {" · "}

                  <button
                    type="button"
                    className="admin-action-link danger"
                    onClick={() => setDeleteTarget(order)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!filtered.length ? (
          <div className="admin-empty">Chưa có đơn hàng phù hợp.</div>
        ) : null}
      </div>

      <BookOrderAdminModal
        order={selected}
        onClose={() => setSelected(null)}
        onSave={async (id, data) => {
          await onUpdate(id, data);

          setSelected(null);
        }}
      />

      <AdminConfirmModal
        open={Boolean(deleteTarget)}
        title="Xóa đơn hàng?"
        description={`Bạn có chắc muốn xóa đơn ${deleteTarget?.orderCode || ""}?`}
        onClose={() => setDeleteTarget(null)}
        onConfirm={async () => {
          if (!deleteTarget) {
            return;
          }

          await onDelete(deleteTarget.id);

          setDeleteTarget(null);
        }}
      />
    </>
  );
}
