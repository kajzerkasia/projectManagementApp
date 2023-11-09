import React from 'react';
const TabButton = ({ children, onSelect, active, ...props }) => {
    return (
        <button className={active ? 'active tab-button' : "tab-button"} onClick={onSelect} {...props}>
            {children}
        </button>
    );
};

export default TabButton;