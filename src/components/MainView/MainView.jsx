import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";
import Tasks from "../Tasks/Tasks.jsx";

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

    const handleDeleteClick = () => {
        if (selectedButton !== null) {
            const updatedTabButtons = [...tabButtons];
            const updatedProjects = [...projects];

            updatedTabButtons.splice(selectedButton, 1);
            updatedProjects.splice(selectedButton, 1);

            setTabButtons(updatedTabButtons);
            setProjects(updatedProjects);
            setSelectedButton(null);
        }
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
                <div className="flex flex-col w-full">
                <Project
                    projectName={tabButtons[selectedButton]}
                    date={projects[selectedButton].dueDate}
                    description={projects[selectedButton].description}
                    onDeleteClick={handleDeleteClick}
                />
                    <Tasks labelText="Tasks"/>
                </div>

            )}
            {!addProjectIsOpen && selectedButton === null && (
                <Home onCreateClick={toggleAddProject}/>
            )}
        </div>
    );
};

export default MainView;

// @TODO: Deleting tasks