import React from "react";

const CustomInput = (props) => {
    const { type, name, Placeholder, classname } = props;
    return (
        <div
            className='form-floating mb-3'
        >
            <input
                type={type}
                name={name}
                // placeholder={Placeholder}
                className={`form-control ${classname}`}
            />
            {/* <Placeholder></Placeholder> */}
        </div>
    );
};

export default CustomInput;