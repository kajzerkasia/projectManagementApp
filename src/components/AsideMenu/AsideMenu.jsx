import React from 'react';
import Button from "../Button/Button.jsx";

export const AsideMenu = ({menuTitle, toggleAddProject, children}) => {

    return (
        <div className="aside-menu-container">
            <h1 className="aside-menu-h1">{menuTitle}</h1>
            <Button className="aside-menu-button" onClick={toggleAddProject}>+ Add Project</Button>
            {children}
        </div>
    );
};

export default AsideMenu;

