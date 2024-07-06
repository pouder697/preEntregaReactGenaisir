import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return (
      <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
            <CartWidget />
      </nav>
    )
  }

  export default NavBar