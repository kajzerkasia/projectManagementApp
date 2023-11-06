import React from 'react';
const TabButton = ({ children, onSelect, isSelected, ...props }) => {
    return (
        <button className={isSelected ? 'active tab-button' : "tab-button"} onClick={onSelect} {...props}>
            {children}
        </button>
    );
};

export default TabButton;