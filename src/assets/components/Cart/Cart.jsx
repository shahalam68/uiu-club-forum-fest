import React from 'react';
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props || {};
    
    const totalReducer = (previusValue,currentValue) => previusValue + currentValue.members;
    const total = cart.reduce(totalReducer , 0)
    return (
        <div className='cart-container'>
            <h3><FontAwesomeIcon icon={faUsers} /> Add Clubs:{cart.length}</h3>
            <h4>Total Members: {total}</h4>
            <h4>Total cost: &#2547;{total*500}</h4>
            <ol type='1'>
                {
                    cart.map(cb => <li>{cb.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;