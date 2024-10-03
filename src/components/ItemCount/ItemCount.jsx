// filename: src/components/ItemCount/ItemCount.jsx

import { useState, useEffect } from 'react';
import { adjustQuantity } from '../../utils/quantityHandler';
import styles from './ItemCount.module.css';

export function ItemCount({ stock, initial, onAdd, productId, cart = [] }) {  // Set default value for cart
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(`itemCount-${productId}`);
    return savedCount ? Number(savedCount) : initial;
  });

  useEffect(() => {
    localStorage.setItem(`itemCount-${productId}`, count);
  }, [count, productId]);

  const increaseCount = () => {
    if (count < stock) {
      const updatedCart = adjustQuantity(cart, productId, 1);  // Handle cart properly
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      const updatedCart = adjustQuantity(cart, productId, -1);  // Handle cart properly
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.itemCountContainer}>
      <div className={styles.counterControls}>
        <button className={styles.countButton} onClick={decreaseCount} disabled={stock === 0}>
          -
        </button>
        <span className={styles.countDisplay}>{count}</span>
        <button className={styles.countButton} onClick={increaseCount} disabled={stock === 0}>
          +
        </button>
      </div>
      <button
        className={styles.addToCartButton}
        onClick={() => onAdd(count)}
        disabled={count === 0 || stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
}
