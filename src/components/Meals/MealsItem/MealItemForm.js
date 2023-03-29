import React, {useRef, useState} from "react";

import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const amountNumber = +enterAmount;
        if (enterAmount.trim().length === 0 || amountNumber < 1 || enterAmount > 5) {
            setAmountIsValid(false);
            return
        }
        props.onAddToCart(amountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                id: 'amount_' + props.id, // this changed!
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button >+ Add</button>
            {!amountIsValid && <p>Please enter value between 1and 5</p>}
        </form>
    );
};

export default MealItemForm;