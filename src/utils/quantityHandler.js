// filename: src/utils/quantityHandler.js

export const adjustQuantity = (cart, productId, change) => {
    return cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + change } : item
    );
  };
  