import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="inner-container">
            {children}
        </div>
    );
};

export default Container;