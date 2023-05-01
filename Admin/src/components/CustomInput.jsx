import React from "react";

const CustomInput = (props) => {
    const { type, label, i_id, i_class } = props;
    return (
        <div
            className='form-floating mb-3'
        >
            <input
                type={type}
                id={i_id}
                // placeholder={Placeholder}
                className={`form-control ${i_class}`}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default CustomInput;