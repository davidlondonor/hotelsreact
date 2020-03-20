import React from "react";
import "./cards.css";
import imagen from "../img/1.jpg";

console.log(imagen);

const Cards = () => {
    return (
        <>
            <div className="">
                <div className="mainPhoto">
                    <p>160x80</p>
                </div>
                <div>
                    <img src={imagen} alt="" />
                    <img src={imagen} alt="" />
                    <img src={imagen} alt="" />
                </div>
            </div>
        </>
    );
};

export default Cards;
