import { useCallback, useEffect, useState } from "react";

import "./AdminManagementPage.css";

import type {
  AddBookInput,
  AddCourseInput,
  AdminTab,
  AdminToastState,
  BookModel,
  BookOrderModel,
  CourseModel,
  UpdateBookOrderInput,
} from "./types/admin.types";

import {
  adminAddBook,
  adminAddCourse,
  adminDeleteBook,
  adminDeleteBookOrder,
  adminDeleteCourse,
  adminGetAllBooks,
  adminGetAllCourses,
  adminGetBookOrders,
  adminUpdateBook,
  adminUpdateBookOrder,
  adminUpdateCourse,
} from "./services/adminDataService";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import AdminBooks from "./pages/AdminBooks/AdminBooks";

import AdminCourses from "./pages/AdminCourses/AdminCourses";

import AdminBookOrders from "./pages/AdminBookOrders/AdminBookOrders";

import AdminLoadingOverlay from "./components/AdminLoadingOverlay/AdminLoadingOverlay";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import AdminToast from "./components/AdminToast/AdminToast";

const emptyToast: AdminToastState = {
  show: false,
  message: "",
  type: "info",
};

export default function AdminManagementPage() {
  const [tab, setTab] = useState<AdminTab>("dashboard");

  const [books, setBooks] = useState<BookModel[]>([]);

  const [courses, setCourses] = useState<CourseModel[]>([]);

  const [orders, setOrders] = useState<BookOrderModel[]>([]);

  const [loading, setLoading] = useState(true);

  const [loadingText, setLoadingText] = useState("Đang tải dữ liệu...");

  const [toast, setToast] = useState<AdminToastState>(emptyToast);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "success") => {
      setToast({
        show: true,
        message,
        type,
      });
    },
    [],
  );

  const loadAll = useCallback(async () => {
    try {
      setLoading(true);

      setLoadingText("Đang tải dữ liệu quản trị...");

      const [bookData, courseData, orderData] = await Promise.all([
        adminGetAllBooks(),
        adminGetAllCourses(),
        adminGetBookOrders(),
      ]);

      setBooks(bookData);

      setCourses(courseData);

      setOrders(orderData);
    } catch (error) {
      console.error("Admin load error:", error);

      showToast("Không thể tải dữ liệu Firestore.", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const runAction = async (
    text: string,
    successMessage: string,
    action: () => Promise<void>,
  ) => {
    try {
      setLoadingText(text);

      setLoading(true);

      await action();

      await loadAll();

      showToast(successMessage, "success");
    } catch (error) {
      console.error(error);

      showToast("Thao tác thất bại. Vui lòng thử lại.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Bạn có chắc muốn đăng xuất khỏi trang quản trị?",
    );

    if (!confirmLogout) {
      return;
    }

    try {
      await signOut(auth);

      window.location.hash = "index";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="admin-management">
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div>
            <div className="admin-brand">
              <a className="mark" href="/#index">
                  <img src="/images/speech-therapy-owl-d5c2c84c.png" alt=""/>
              </a>

              <b>OWLSPEAKS</b>

              <span>Content & Sales Admin</span>
            </div>

            <nav className="admin-nav">
              <button
                type="button"
                className={tab === "dashboard" ? "active" : ""}
                onClick={() => setTab("dashboard")}
              >
                <span className="icon">◫</span>

                <span className="label">Tổng quan</span>
              </button>

              <button
                type="button"
                className={tab === "bookOrders" ? "active" : ""}
                onClick={() => setTab("bookOrders")}
              >
                <span className="icon">◉</span>

                <span className="label">Đơn đặt sách</span>
              </button>

              <button
                type="button"
                className={tab === "books" ? "active" : ""}
                onClick={() => setTab("books")}
              >
                <span className="icon">▤</span>

                <span className="label">Sách</span>
              </button>

              <button
                type="button"
                className={tab === "courses" ? "active" : ""}
                onClick={() => setTab("courses")}
              >
                <span className="icon">◇</span>

                <span className="label">Khóa học</span>
              </button>
            </nav>
          </div>
          <button type="button" className="admin-logout" onClick={handleLogout}>
            <span className="icon">↪</span>

            <span className="label">Đăng xuất</span>
          </button>
        </aside>

        <main className="admin-main">
          {tab === "dashboard" && (
            <AdminDashboard books={books} courses={courses} orders={orders} />
          )}

          {tab === "bookOrders" && (
            <AdminBookOrders
              orders={orders}
              onUpdate={(id, data: UpdateBookOrderInput) =>
                runAction(
                  "Đang cập nhật đơn hàng...",
                  "Đã cập nhật đơn hàng.",
                  () => adminUpdateBookOrder(id, data),
                )
              }
              onDelete={(id) =>
                runAction("Đang xóa đơn hàng...", "Đã xóa đơn hàng.", () =>
                  adminDeleteBookOrder(id),
                )
              }
            />
          )}

          {tab === "books" && (
            <AdminBooks
              books={books}
              onAdd={(data: AddBookInput) =>
                runAction(
                  "Đang thêm sách...",
                  "Đã thêm sách mới.",
                  async () => {
                    await adminAddBook(data);
                  },
                )
              }
              onUpdate={(id, data) =>
                runAction("Đang cập nhật sách...", "Đã cập nhật sách.", () =>
                  adminUpdateBook(id, data),
                )
              }
              onDelete={(id) =>
                runAction("Đang xóa sách...", "Đã xóa sách.", () =>
                  adminDeleteBook(id),
                )
              }
            />
          )}

          {tab === "courses" && (
            <AdminCourses
              courses={courses}
              onAdd={(data: AddCourseInput) =>
                runAction(
                  "Đang thêm khóa học...",
                  "Đã thêm khóa học.",
                  async () => {
                    await adminAddCourse(data);
                  },
                )
              }
              onUpdate={(id, data) => {
                const { courseId, ...updates } = data;

                return runAction(
                  "Đang cập nhật khóa học...",
                  "Đã cập nhật khóa học.",
                  () => adminUpdateCourse(id, updates),
                );
              }}
              onDelete={(id) =>
                runAction("Đang xóa khóa học...", "Đã xóa khóa học.", () =>
                  adminDeleteCourse(id),
                )
              }
            />
          )}
        </main>
      </div>

      <AdminLoadingOverlay show={loading} text={loadingText} />

      <AdminToast toast={toast} onClose={() => setToast(emptyToast)} />
    </div>
  );
}
