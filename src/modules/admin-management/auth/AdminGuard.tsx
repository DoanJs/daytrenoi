import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../../../firebase.config";
import AdminLoginPage from "./AdminLoginPage";
import "./AdminAuth.css";

interface AdminGuardProps {
  children: ReactNode;
}

type AuthStatus =
  | "loading"
  | "unauthenticated"
  | "unauthorized"
  | "authenticated";

export default function AdminGuard({
  children,
}: AdminGuardProps) {
  const [status, setStatus] =
    useState<AuthStatus>("loading");

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        // Firebase đang kiểm tra session
        setStatus("loading");

        // Chưa đăng nhập
        if (!currentUser) {
          setUser(null);
          setStatus("unauthenticated");
          return;
        }

        try {
          /**
           * Kiểm tra document:
           *
           * users/{firebaseUid}
           */
          const userRef = doc(
            db,
            "users",
            currentUser.uid
          );

          const userSnap =
            await getDoc(userRef);

          // Có Firebase account
          // nhưng không có document users/{uid}
          if (!userSnap.exists()) {
            setUser(currentUser);
            setStatus("unauthorized");
            return;
          }

          const userData =
            userSnap.data();

          /**
           * Chỉ cho phép:
           *
           * role === "admin"
           * isActive === true
           */
          const isAdmin =
            userData.role === "admin" &&
            userData.isActive === true;

          if (!isAdmin) {
            setUser(currentUser);
            setStatus("unauthorized");
            return;
          }

          // Hợp lệ
          setUser(currentUser);
          setStatus("authenticated");
        } catch (error) {
          console.error(
            "AdminGuard error:",
            error
          );

          setUser(currentUser);
          setStatus("unauthorized");
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  /**
   * Firebase đang kiểm tra
   */
  if (status === "loading") {
    return (
      <div className="admin-auth-loading">
        <div className="admin-auth-spinner" />

        <span>
          Đang kiểm tra quyền truy cập...
        </span>
      </div>
    );
  }

  /**
   * Chưa login
   */
  if (status === "unauthenticated") {
    return <AdminLoginPage />;
  }

  /**
   * Login rồi nhưng không phải admin
   */
  if (status === "unauthorized") {
    return (
      <div className="admin-auth-denied">
        <div className="admin-auth-denied-box">
          <div className="admin-auth-denied-icon">
            🔒
          </div>

          <h2>
            Không có quyền truy cập
          </h2>

          <p>
            Tài khoản{" "}
            <strong>
              {user?.email}
            </strong>{" "}
            không có quyền quản trị hệ thống.
          </p>
        </div>
      </div>
    );
  }

  /**
   * Đăng nhập + đúng Admin
   */
  return <>{children}</>;
}