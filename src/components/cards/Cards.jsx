import React from "react";
import "./cards.css";
import imagen from "../img/1.jpg";
import imagen2 from "../img/2.jpg";
import imagen3 from "../img/3.jpg";
import imagen4 from "../img/4.jpg";

const Cards = () => {
    return (
        <>
            <div className="">
                <div className="mainPhoto">
                    <img src={imagen} alt="" />
                </div>
                <div>
                    <img src={imagen2} alt="2" />
                    <img src={imagen3} alt="3" />
                    <img src={imagen4} alt="4" />
                </div>
            </div>
        </>
    );
};

export default Cards;
