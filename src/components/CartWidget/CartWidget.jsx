// filename: src/components/CartWidget/CartWidget.jsx

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartIcon from './assets/cart.jpg';  
import styles from './CartWidget.module.css';

export const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.cartWidgetContainer} onClick={handleCartClick}>
            <img src={cartIcon} alt="Carrito" />  
            <span className={styles.counter}>{itemCount}</span>
        </div>
    );
};
