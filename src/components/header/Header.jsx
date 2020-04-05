import React from "react";
import "./header.css";
import PropTypes from "prop-types";

const Header = props => {
    let language = "es-MX";
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return (
        <section className="header is-primary">
            <div className="header-body">
                <div className="container">
                    <h1 className="title">Acamica Hotels</h1>
                    <h2 className="subtitle">
                        <strong>Hoteles</strong> desde el{" "}
                        <strong>
                            {props.filters.dateFrom.toLocaleDateString(
                                language,
                                options
                            )}
                        </strong>{" "}
                        hasta el{" "}
                        <strong>
                            {props.filters.dateTo.toLocaleDateString(
                                language,
                                options
                            )}
                        </strong>
                        {props.filters.country !== undefined &&
                            `en ${props.filters.country}`}
                        {props.filters.price !== undefined &&
                            `por $${props.filters.price} la noche`}
                        {props.filters.rooms !== undefined &&
                            `de hasta ${props.filters.rooms} habitaciones.`}
                    </h2>
                </div>
            </div>
        </section>
    );
};

Header.propTypes = {
    filters: PropTypes.object.isRequired
};

export default Header;

// {
/* <header className="headerMain">
            <div className="headerText">
                <h1>Hoteles</h1>
                <h4>
                    desde el martes, 1 de enero de 2020 hasta el míercoles, 2 de
                    enero de 2021
                </h4>
            </div>
        </header> */
// }

// import React from "react";
// import PropTypes from "prop-types";

// export default function Hero(props) {
// let language = "es-MX";
// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
// };
//     return (
//         <section className="hero is-primary">
//             <div className="hero-body">
//                 <div className="container">
//                     <h1 className="title">Bookify</h1>
//                     <h2 className="subtitle">
//                         <strong>Hoteles</strong> desde el{" "}
//                         <strong>
//                             {props.filters.dateFrom.toLocaleDateString(
//                                 language,
//                                 options
//                             )}
//                         </strong>{" "}
//                         hasta el{" "}
//                         <strong>
//                             {props.filters.dateTo.toLocaleDateString(
//                                 language,
//                                 options
//                             )}
//                         </strong>
//                         {props.filters.country != undefined &&
//                             ` en ${props.filters.country}`}
//                         {props.filters.price != undefined &&
//                             ` por $${props.filters.price} la noche`}
//                         {props.filters.rooms != undefined &&
//                             ` de hasta ${props.filters.rooms} habitaciones.`}
//                     </h2>
//                 </div>
//             </div>
//         </section>
//     );
// }

// Hero.propTypes = {
//     filters: PropTypes.object.isRequired
// };
