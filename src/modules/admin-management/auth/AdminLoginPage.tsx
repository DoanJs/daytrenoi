import {
  FormEvent,
  useState,
} from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../../../firebase.config";

import "./AdminAuth.css";

export default function AdminLoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    event: FormEvent
  ) => {
    event.preventDefault();

    if (!email.trim()) {
      setError(
        "Vui lòng nhập email."
      );
      return;
    }

    if (!password) {
      setError(
        "Vui lòng nhập mật khẩu."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      /**
       * Không cần navigate.
       *
       * AdminGuard đang nghe:
       * onAuthStateChanged()
       *
       * nên sau khi login thành công,
       * AdminGuard tự kiểm tra role.
       */
    } catch (error) {
      console.error(
        "Admin login error:",
        error
      );

      setError(
        "Email hoặc mật khẩu không chính xác."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <form
        className="admin-login-card"
        onSubmit={handleSubmit}
      >
        <div className="admin-login-brand">
          <div className="admin-login-logo">
            <img src="/images/speech-therapy-owl-d5c2c84c.png" alt=""/>
          </div>

          <span>
            OWLSPEAKS
          </span>
        </div>

        <div className="admin-login-heading">
          <span className="admin-login-eyebrow">
            Quản trị website
          </span>

          <h1>
            Đăng nhập Admin
          </h1>

          <p>
            Đăng nhập để quản lý sách,
            khóa học và đơn đặt sách.
          </p>
        </div>

        <label className="admin-login-field">
          <span>Email</span>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            placeholder="admin@example.com"
            autoComplete="email"
          />
        </label>

        <label className="admin-login-field">
          <span>Mật khẩu</span>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </label>

        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="admin-login-submit"
          disabled={loading}
        >
          {loading
            ? "Đang đăng nhập..."
            : "Đăng nhập"}
        </button>

        <a
          href="#index"
          className="admin-login-back"
        >
          ← Quay lại website
        </a>
      </form>
    </div>
  );
}