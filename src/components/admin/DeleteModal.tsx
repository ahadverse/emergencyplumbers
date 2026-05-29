'use client';

interface Props {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function DeleteModal({ title, onConfirm, onCancel, loading }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-icon">🗑️</div>
        <div className="modal-title">Delete Post?</div>
        <div className="modal-body">
          Are you sure you want to delete &ldquo;{title}&rdquo;? This action cannot be undone.
        </div>
        <div className="modal-actions">
          <button className="modal-btn-cancel" onClick={onCancel} disabled={loading}>Cancel</button>
          <button className="modal-btn-delete" onClick={onConfirm} disabled={loading}>
            {loading ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
