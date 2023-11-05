import React from 'react';

const Button = ({children, onClick, ...props}) => {
    return (
        <button {...props} onClick={onClick}>{children}</button>
    );
};

export default Button;