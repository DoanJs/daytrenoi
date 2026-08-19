import "./AdminConfirmModal.css";

interface Props {
  open: boolean;

  title: string;

  description: string;

  confirmText?: string;

  onClose: () => void;

  onConfirm: () => void;
}

export default function AdminConfirmModal({
  open,
  title,
  description,
  confirmText = "Xóa",
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="admin-confirm-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="admin-confirm-modal">
        <div className="admin-confirm-icon">
          !
        </div>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <div className="admin-confirm-actions">
          <button
            type="button"
            className="admin-btn secondary"
            onClick={onClose}
          >
            Hủy
          </button>

          <button
            type="button"
            className="admin-btn danger"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
