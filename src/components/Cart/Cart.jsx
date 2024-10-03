// filename: src/components/Cart/Cart.jsx

import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { fetchAPI } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { adjustQuantity } from '../../utils/quantityHandler';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart, emptyCart, updateQuantity, removeItem } = useContext(CartContext);
  const [stockInfo, setStockInfo] = useState({});
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showRemoveItemModal, setShowRemoveItemModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStock = async () => {
      const stocks = {};
      for (const item of cart) {
        const product = await fetchAPI({ productId: item.id });
        if (product && product.stock !== undefined) {
          stocks[item.id] = product.stock;
        } else {
          stocks[item.id] = 0;
        }
      }
      setStockInfo(stocks);
    };
    fetchStock();
  }, [cart]);

  const increaseQuantity = (item) => {
    if (item.quantity < stockInfo[item.id]) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemoveFromCart = (item) => {
    setItemToRemove(item);
    setShowRemoveItemModal(true);
  };

  const confirmRemoveItem = () => {
    removeItem(itemToRemove.id);
    setShowRemoveItemModal(false);
    setItemToRemove(null);
  };

  const cancelRemoveItem = () => {
    setShowRemoveItemModal(false);
    setItemToRemove(null);
  };

  const handleEmptyCart = () => {
    setShowEmptyCartModal(true);
  };

  const confirmEmptyCart = () => {
    emptyCart();
    setShowEmptyCartModal(false);
  };

  const cancelEmptyCart = () => {
    setShowEmptyCartModal(false);
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} />
              <div className={styles.cartItemDetails}>
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
                <p>Stock disponible: {stockInfo[item.id]}</p>
              </div>
              <div className={styles.cartItemControls}>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item)} className={styles.removeButton}>
                Sacar del carrito
              </button>
            </div>
          ))}
          <div className={styles.cartSummary}>
            <button onClick={handleEmptyCart} className={styles.checkoutButton}>
              Vaciar carrito
            </button>
            <button onClick={proceedToCheckout} className={styles.checkoutButton}>
              Finalizar compra
            </button>
          </div>
        </div>
      )}
      <Modal
        isOpen={showEmptyCartModal}
        title="Vaciar Carrito"
        message="¿Estás seguro de que deseas vaciar el carrito?"
        onConfirm={confirmEmptyCart}
        onCancel={cancelEmptyCart}
        confirmText="Sí"
        cancelText="No"
      />
      <Modal
        isOpen={showRemoveItemModal}
        title="Eliminar Producto"
        message={`¿Estás seguro de que deseas eliminar ${itemToRemove?.name} del carrito?`}
        onConfirm={confirmRemoveItem}
        onCancel={cancelRemoveItem}
        confirmText="Sí"
        cancelText="No"
      />
    </div>
  );
}
