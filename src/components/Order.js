import React from "react";
import classes from './Order.module.css';
import Modal from './UI/Modal';

const Order = (props) => {
if(props.totalPrice <= 0){
    throw new Error("No Products Selected");
}
return (
    <Modal onCloseCart = {props.onHideCart}>
        <div className={classes.total}>
            <span>Congratulation! Your Order is successful.</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onHideCart}>Close</button>
        </div>
    </Modal>
);
}
export default Order;