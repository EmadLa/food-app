import React, {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import HeaderIconCart from "./HeaderIconCart";

import classes from './Header.module.css';

import mealsImage from '../../assets/images/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <HeaderIconCart className={classes['main-image']} image={mealsImage} alt="Meal Image"/>
        </Fragment>
    );
};

export default Header;
