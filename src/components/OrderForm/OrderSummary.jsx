// filename: src/components/OrderForm/OrderSummary.jsx

import styles from './OrderForm.module.css';

export function OrderSummary({ cart }) {
  return (
    <ul className={styles.orderList}>
      {cart.map((item) => (
        <li key={item.id} className={styles.orderItem}>
          <p>{item.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}
