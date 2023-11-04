import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";

const MainView = () => {

    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);

    const handleClick = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    }

    return (
        <div className="flex w-full h-screen">
            <AsideMenu title="Your projects" onClick={handleClick}/>
            {addProjectIsOpen && <AddProject/>}
        </div>
    );
};

export default MainView;