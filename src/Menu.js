import { useState } from "react";
import Button from "./Button";

function Menu() {
    const names = ["Hey", "Hi", "Hello"];
    const clickHandler = (index) => {
        console.log(index);
    };
    return (
        <div>
            {names.map((name, index) => (
                <Button label={name} clickEvent={() => clickHandler(index)}></Button>
            ))}
        </div>
    );
}

export default Menu;

