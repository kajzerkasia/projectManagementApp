import React from 'react';
import Tabs from "../Tabs/Tabs.jsx";

export const AsideMenu = ({title, onClick}) => {

    return (
            <div className="aside-menu-container">
                <h1 className="aside-menu-h1">{title}</h1>
                <button className="aside-menu-button" onClick={onClick}>+ Add Project</button>
                <Tabs className="aside-menu-tabs"/>
            </div>
    );
};

export default AsideMenu;