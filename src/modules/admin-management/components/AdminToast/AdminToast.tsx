import { useEffect } from "react";

import type {
  AdminToastState,
} from "../../types/admin.types";

import "./AdminToast.css";

interface Props {
  toast: AdminToastState;

  onClose: () => void;
}

export default function AdminToast({
  toast,
  onClose,
}: Props) {
  useEffect(() => {
    if (!toast.show) return;

    const timer =
      window.setTimeout(
        onClose,
        2600,
      );

    return () =>
      window.clearTimeout(
        timer,
      );
  }, [
    toast.show,
    toast.message,
    onClose,
  ]);

  if (!toast.show) {
    return null;
  }

  return (
    <div
      className={`admin-toast ${toast.type}`}
    >
      <span>
        {toast.type === "success"
          ? "✓"
          : toast.type === "error"
            ? "!"
            : "i"}
      </span>

      <p>
        {toast.message}
      </p>

      <button
        type="button"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
}
