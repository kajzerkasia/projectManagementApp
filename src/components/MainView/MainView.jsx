import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";

const MainView = () => {

    const [tabButtons, setTabButtons] = useState([]);
    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleSelect = selectedButton => {
        setSelectedButton(selectedButton);
        setAddProjectIsOpen(false);
    };

    const toggleAddProject = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    };

    const handleSaveClick = (newProject) => {
        const { title, description, dueDate } = newProject;
        setTabButtons((prevTabButtons) => [...prevTabButtons, title]);
        setProjects((prevProjects) => [
            ...prevProjects,
            {
                title,
                description,
                dueDate,
            },
        ]);
    };

    return (
        <div className="flex w-full h-screen">
            <AsideMenu
                menuTitle="Your projects"
                onClickTabButton={handleSelect}
                tabButtons={tabButtons}
                selectedButton={selectedButton}
                toggleAddProject={toggleAddProject}
            />
            {addProjectIsOpen &&
                <AddProject onSaveClick={handleSaveClick} onCancelClick={toggleAddProject} />
            }
            {!addProjectIsOpen && selectedButton !== null && selectedButton >= 0 && selectedButton < projects.length && (
                <Project
                    projectName={tabButtons[selectedButton]}
                    date={projects[selectedButton].dueDate}
                    description={projects[selectedButton].description}
                />
            )}
            {!addProjectIsOpen && selectedButton === null && (
                <Home onCreateClick={toggleAddProject}/>
            )}
        </div>
    );
};

export default MainView;

// @TODO Split this component into smaller components - maybe move AsideMenu logic to this component or other component. Generally - split components depending on shared states