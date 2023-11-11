import React from 'react';

const Input = ({ labelText, field, ...props}) => {
    return (
        <>
            <label className="input-label">{labelText && labelText}</label>
            {field === 'textarea' ?
                <textarea
                    className="input-and-textarea"
                    {...props}
                >
                </textarea>
                :
                <input
                    className="input-and-textarea"
                    {...props}
                />
            }
        </>
    );
};

export default Input;