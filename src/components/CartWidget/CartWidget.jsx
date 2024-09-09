// filename: src/components/CartWidget/CartWidget.jsx

import { useState } from 'react';
import cart from './assets/cart.jpg';
import styles from './CartWidget.module.css';

export const CartWidget = () => {
    const [itemCount] = useState(0);

    return (
        <div className={styles.cartWidgetContainer}>
            <img src={cart} className={styles.carrito} alt="Shopping cart icon" />
            <span className={styles.counter}>{itemCount}</span>
        </div>
    );
}
