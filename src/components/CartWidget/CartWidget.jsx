import React from 'react';
import cart from '../../assets/cart.svg';

function CartWidget(){
    return(
        <div>
             <img src={cart} alt="cart-widget" />
        </div>
    )
}

export default CartWidget