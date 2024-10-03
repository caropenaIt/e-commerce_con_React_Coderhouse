// filename: src/components/ItemDetail/ItemDetail.jsx

import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import styles from './ItemDetail.module.css';

export function ItemDetail({ id, name, description, price, imageUrl, stock }) {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    addToCart({ id, name, price, imageUrl, quantity });
    setAddedToCart(true);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={name}
          className={`${styles.itemImage}`}
        />
        
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className={styles.itemPriceDisplay}>Precio: ${price}</p>
      
      {stock > 0 && !addedToCart && (
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} productId={id} />
      )}
      {addedToCart && (
        <>
          <p>Producto agregado al carrito.</p>
          <button onClick={goToCart} className={styles.goToCartButton}>
            Ir al carrito
          </button>
        </>
      )}
    </div>
  );
}
