import React from "react";
import classes from "../../../page/Meet/create-meet/CreateMeet.module.css";

const Input = ({ type, label, name, value, placeholder, handleChange }) => {
    return (
        <>
            <div className={classes.indv_input}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default Input;
