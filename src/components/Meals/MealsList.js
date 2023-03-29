import React from "react";
import MealItem from "./MealsItem/MealItem";
import Card from "../UI/Card";

const MealsList = (props) => {
    return (
        <section className={props.className}>
            <Card>
                <ul>
                    {props.data.map((item) => {
                        return <MealItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    })}
                </ul>
            </Card>
        </section>
    )
};

export default MealsList;