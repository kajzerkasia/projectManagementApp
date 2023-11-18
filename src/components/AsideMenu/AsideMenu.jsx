import React, {useContext} from 'react';
import Button from "../Button/Button.jsx";
import {ProjectContext} from "../../store/project-management-context.jsx";

export const AsideMenu = ({menuTitle, children}) => {
    const { onToggleAddProject } = useContext(ProjectContext);

    return (
        <div className="aside-menu-container">
            <h1 className="aside-menu-h1">{menuTitle}</h1>
            <Button className="aside-menu-button" onClick={onToggleAddProject}>+ Add Project</Button>
            {children}
        </div>
    );
};

export default AsideMenu;

