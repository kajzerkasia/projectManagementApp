import React from 'react';
const TabButton = ({ children, onClick, ...props }) => {
    return (
        <button className="tab-button" onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default TabButton;