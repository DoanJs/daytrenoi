import "./AdminLoadingOverlay.css";

interface Props {
  show: boolean;
  text?: string;
}

export default function AdminLoadingOverlay({
  show,
  text = "Đang xử lý...",
}: Props) {
  if (!show) return null;

  return (
    <div
      className="admin-loading-overlay"
      role="status"
      aria-live="polite"
    >
      <div className="admin-loading-spinner" />

      <span>
        {text}
      </span>
    </div>
  );
}
