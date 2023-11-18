import React, {useContext} from 'react';
import {ProjectContext} from "../../store/project-management-context.jsx";
const TabButton = ({ children, active, ...props }) => {

    return (
        <button className={active ? 'active tab-button' : "tab-button"} {...props}>
            {children}
        </button>
    );
};

export default TabButton;