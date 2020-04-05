import React from "react";
import "./dateSelected.css";
// import From from "../from/From";
import PropTypes from "prop-types";

const DateSelected = ({ date, name, icon, onDateChange }) => {
    const dateFormated = date.format("YYYY[-]MM[-]DD");
    const handleDateChange = event => {
        const { name, value } = event.target;
        onDateChange({ name, value: value });
    };

    return (
        <nav className="field">
            <div className="control has-icons-left">
                <input
                    className="input"
                    type="date"
                    name={name}
                    value={dateFormated}
                    onChange={handleDateChange}
                />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </nav>
    );
};

// DateFilter.propTypes = {
//     icon: PropTypes.oneOf(["sign-in-alt", "sign-out-alt"]),
//     date: PropTypes.instanceOf(dayjs),
//     name: PropTypes.string,
//     onDateChange: PropTypes.func.Required
// };

DateSelected.propTypes = {
    icon: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
};

export default DateSelected;

// import React from "react";
// import PropTypes from "prop-types";
// import dayjs from "dayjs";

// export default function DateFilter({ date, name, icon, onDateChange }) {
//     const dateFormated = date.format("YYYY[-]MM[-]DD");

//     const handleDateChange = event => {
//         const { name, value } = event.target;
//         onDateChange({ name, value: dayjs(value) });
//     };

// return {
/* <div className="field">
            <div className="control has-icons-left">
                <input
                    className="input"
                    type="date"
                    name={name}
                    value={dateFormated}
                    onChange={handleDateChange}
                />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div> */
//     };
// }

// DateFilter.propTypes = {
//     icon: PropTypes.oneOf(["sign-in-alt", "sign-out-alt"]),
//     date: PropTypes.instanceOf(dayjs),
//     name: PropTypes.string,
//     onDateChange: PropTypes.func
// };
