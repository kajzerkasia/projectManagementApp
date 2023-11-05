import React from 'react';

const TabButton = ({ children }) => {
    return (
        <button className="tab-button">
            {children}
        </button>
    );
};

export default TabButton;