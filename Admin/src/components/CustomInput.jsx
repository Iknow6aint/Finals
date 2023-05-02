import React from "react";

import { Formik } from 'formik';
const CustomInput = (props) => {
    const { type, label, i_id, i_class, name, value, onCh, onBl } = props;
    return (
        <div
            className='form-floating mb-3'
        >
            <input
                type={type}
                id={i_id}
                // placeholder={Placeholder}
                name={name}
                value={value}
                onChange={onCh}
                onBlur={onCh}
                className={`form-control ${i_class}`}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default CustomInput;