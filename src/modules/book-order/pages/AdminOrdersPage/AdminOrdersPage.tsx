import { useEffect, useMemo, useState } from "react";
import { BookOrderModel, BookOrderStatus } from "../../models/BookOrderModel";
import {
  getBookOrders,
  updateBookOrderStatus,
  updateBookOrderZaloConnected,
} from "../../services/bookOrderRepository";
import OrderDetailModal from "../../components/OrderDetailModal/OrderDetailModal";
import "./AdminOrdersPage.css";

const statusLabels: Record<BookOrderStatus, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  completed: "Hoàn tất",
  cancelled: "Đã hủy",
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<BookOrderModel[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<BookOrderModel | null>(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<BookOrderStatus | "all">("all");

  useEffect(() => {
    getBookOrders().then(setOrders).catch(console.error);
  }, []);

  const filteredOrders = useMemo(() => {
    const search = searchText.trim().toLowerCase();
    return orders.filter((order) => {
      const matchStatus = statusFilter === "all" || order.status === statusFilter;
      const matchSearch =
        !search ||
        [order.orderCode, order.customerName, order.phone, order.address]
          .join(" ")
          .toLowerCase()
          .includes(search);
      return matchStatus && matchSearch;
    });
  }, [orders, searchText, statusFilter]);

  const handleStatusChange = async (id: string, status: BookOrderStatus) => {
    const updated = await updateBookOrderStatus(id, status);
    setOrders((current) => current.map((item) => (item.id === id ? updated : item)));
    setSelectedOrder((current) => (current?.id === id ? updated : current));
  };

  const handleZaloConnected = async (id: string, connected: boolean) => {
    const updated = await updateBookOrderZaloConnected(id, connected);
    setOrders((current) => current.map((item) => (item.id === id ? updated : item)));
    setSelectedOrder((current) => (current?.id === id ? updated : current));
  };

  return (
    <div className="bo-admin">
      <div className="bo-admin-head">
        <span>QUẢN LÝ BÁN SÁCH</span>
        <h1>Đơn đặt sách</h1>
        <p>Khách điền thông tin trên web, sau đó gửi mã đơn qua Zalo để OWLSPEAKS xác nhận và gửi bill.</p>
      </div>

      <div className="bo-admin-stats">
        <div><span>Tổng đơn</span><b>{orders.length}</b></div>
        <div><span>Chờ xác nhận</span><b>{orders.filter((i) => i.status === "pending").length}</b></div>
        <div><span>Đã nhắn Zalo</span><b>{orders.filter((i) => i.zaloConnected).length}</b></div>
      </div>

      <div className="bo-admin-toolbar">
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Tìm mã đơn, tên, SĐT..." />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as BookOrderStatus | "all")}>
          <option value="all">Tất cả trạng thái</option>
          {(Object.keys(statusLabels) as BookOrderStatus[]).map((status) => (
            <option key={status} value={status}>{statusLabels[status]}</option>
          ))}
        </select>
      </div>

      <div className="bo-admin-table-wrap">
        <table className="bo-admin-table">
          <thead><tr><th>Mã đơn</th><th>Khách</th><th>Sách</th><th>SL</th><th>Tổng</th><th>Zalo</th><th>Trạng thái</th><th></th></tr></thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td><b>{order.orderCode}</b></td>
                <td><b>{order.customerName}</b><span>{order.phone}</span></td>
                <td>{order.items[0]?.bookName}</td>
                <td>{order.totalQuantity}</td>
                <td className="bo-admin-total">{formatMoney(order.totalAmount)}</td>
                <td><span className={order.zaloConnected ? "bo-admin-zalo on" : "bo-admin-zalo"}>{order.zaloConnected ? "✓ Đã nhắn" : "Chưa nhắn"}</span></td>
                <td><span className={`bo-admin-status ${order.status}`}>{statusLabels[order.status]}</span></td>
                <td><button type="button" onClick={() => setSelectedOrder(order)}>Xem</button></td>
              </tr>
            ))}
            {!filteredOrders.length ? <tr><td colSpan={8}><div className="bo-admin-empty">Chưa có đơn phù hợp.</div></td></tr> : null}
          </tbody>
        </table>
      </div>

      <OrderDetailModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
        onZaloConnectedChange={handleZaloConnected}
      />
    </div>
  );
}
