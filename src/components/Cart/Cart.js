import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length > 0

    const cartItemAddHandler = (item) => {
        cartContext.addItem(item);

    };

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    return (
        <Modal className={classes['cart-items']} onClose={props.onClose}>
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item)=>{
                return <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}

                />
            })}
        </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button--alt']} name="Close" onClose={props.onClose}/>
                {hasItems && <Button className={classes.button} name="Order"/>}
            </div>
        </Modal>
    );
};

export default Cart;