import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, classname } = props;
    return (
        <div
        //  class='form-floating mb-3'
        >
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${classname}`}
            />
            <placeholder></placeholder>
        </div>
    );
};

export default CustomInput;