import type {
  BookModel,
  BookOrderModel,
  CourseModel,
} from "../../types/admin.types";

import { formatMoney } from "../../utils/adminFormat";

interface Props {
  books: BookModel[];
  courses: CourseModel[];
  orders: BookOrderModel[];
}

export default function AdminDashboard({ books, courses, orders }: Props) {
  const pending = orders.filter((item) => item.status === "pending").length;

  const zaloConnected = orders.filter((item) => item.zaloConnected).length;

  const revenue = orders
    .filter((item) => item.status !== "cancelled")
    .reduce((total, item) => total + item.totalAmount, 0);

  return (
    <>
      <div className="admin-page-header">
        <div>
          <div className="eyebrow">Tổng quan</div>

          <h1>Dashboard quản trị</h1>

          <p>Theo dõi dữ liệu sách, đơn hàng và lịch khóa học.</p>
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <span className="label">Đơn đặt sách</span>

          <strong>{orders.length}</strong>

          <small>{pending} đơn đang chờ xác nhận</small>
        </div>

        <div className="admin-stat">
          <span className="label">Đã nhắn Zalo</span>

          <strong>{zaloConnected}</strong>

          <small>Đã xác định tài khoản khách</small>
        </div>

        <div className="admin-stat">
          <span className="label">Đầu sách</span>

          <strong>{books.length}</strong>

          <small>
            {books.filter((item) => item.isActive).length} đang hiển thị
          </small>
        </div>

        <div className="admin-stat">
          <span className="label">Giá trị đơn</span>

          <strong>{formatMoney(revenue)}</strong>

          <small>Không tính đơn đã hủy</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="admin-panel">
          <div className="admin-panel-head">
            <h3>Đơn hàng gần đây</h3>

            <span>5 đơn mới nhất</span>
          </div>

          <div className="dashboard-recent">
            {orders.slice(0, 5).map((order) => (
              <div className="dashboard-order" key={order.id}>
                <b>{order.orderCode}</b>

                <div>
                  <span>{order.customerName}</span>

                  <small>{order.phone}</small>
                </div>

                <div>
                  <span>{formatMoney(order.totalAmount)}</span>

                  <small>{order.totalQuantity} cuốn</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-head">
            <h3>Lịch khóa học</h3>

            <span>
              {courses.filter((item) => item.isActive).length} đang mở
            </span>
          </div>

          {courses
            .filter((item) => item.isActive)
            .slice(0, 5)
            .map((course) => (
              <div className="dashboard-course" key={course.id}>
                <b>{course.title}</b>

                <span>
                  {course.schedule}
                  {" · "}
                  {course.location}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
