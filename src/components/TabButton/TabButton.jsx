import React from 'react';
const TabButton = ({ children, active, ...props }) => {
    return (
        <button className={active ? 'active tab-button' : "tab-button"} {...props}>
            {children}
        </button>
    );
};

export default TabButton;