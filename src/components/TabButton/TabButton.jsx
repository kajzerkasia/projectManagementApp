import React from 'react';

const TabButton = ({ text }) => {
    return (
        <button className="hover:text-almost-white hover:bg-darker-warm-gray p-2 pr-36 text-lg">
            {text}
        </button>
    );
};

export default TabButton;