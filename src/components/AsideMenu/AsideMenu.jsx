import React from 'react';
import Tabs from "../Tabs/Tabs.jsx";

const AsideMenu = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <button>Add Project</button>
            <Tabs/>
        </div>
    );
};

export default AsideMenu;