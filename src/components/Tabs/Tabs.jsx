import React from 'react';
import TabButton from "../TabButton/TabButton.jsx";

const Tabs = ({...props}) => {
    return (
        <div {...props}>
            <TabButton text="Learning React"/>
            <TabButton text="Mastering React"/>
        </div>
    );
};

export default Tabs;