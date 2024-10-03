// filename: src/components/Modal/Modal.jsx
import styles from './Modal.module.css';

export function Modal({ isOpen, title, message, onConfirm, onCancel, confirmText, cancelText }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {title && <h2>{title}</h2>}
        <p>{message}</p>
        <div className={styles.buttonGroup}>
          {onCancel && (
            <button onClick={onCancel} className={styles.cancelButton}>
              {cancelText || 'No'}
            </button>
          )}
          {onConfirm && (
            <button onClick={onConfirm} className={styles.confirmButton}>
              {confirmText || 'Sí'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
