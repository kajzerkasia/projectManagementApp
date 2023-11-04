import React, {useState} from 'react';
import Tabs from "../Tabs/Tabs.jsx";
import AddProject from "../AddProject/AddProject.jsx";

export const AsideMenu = ({title}) => {
    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);

    const handleClick = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    }

    return (
        <div className="flex w-full h-screen">
            <div className="aside-menu-container">
                <h1 className="aside-menu-h1">{title}</h1>
                <button className="aside-menu-button" onClick={handleClick}>+ Add Project</button>
                <Tabs className="aside-menu-tabs"/>
            </div>
            {addProjectIsOpen && <AddProject/>}
        </div>
    );
};

export default AsideMenu;