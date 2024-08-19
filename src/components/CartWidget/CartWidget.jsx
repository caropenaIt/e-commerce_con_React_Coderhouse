import cart from './assets/carrito.png';

export const CartWidget = () => {
    return (
    
        <div className="cart-widget-container">
            <img src={cart} alt="imagen-carrito" className='carrito' />
            <span>0</span>
        </div>
    
    )
    
}

export default CartWidget;