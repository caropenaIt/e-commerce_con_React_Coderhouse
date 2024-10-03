// filename: ./src/components/ErrorMessage/ErrorMessage.jsx

import styles from './ErrorMessage.module.css';

export function ErrorMessage() {
  return (
    <div className={styles.errorContainer}>
      <p>Ups, hay un problema con el servidor. Por favor intentar más tarde nuevamente.</p>
    </div>
  );
}
