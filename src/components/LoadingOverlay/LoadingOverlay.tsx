import "./LoadingOverlay.css";

interface LoadingOverlayProps {
  show: boolean;
  text?: string;
}

export default function LoadingOverlay({
  show,
  text = "Đang xử lý...",
}: LoadingOverlayProps) {
  if (!show) return null;

  return (
    <div
      className="loading-overlay"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loading-overlay-content">
        <div className="loading-overlay-spinner" />

        <span>{text}</span>
      </div>
    </div>
  );
}