import React, {useRef, useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import NoProjectSelected from "../NoProjectSelected/NoProjectSelected.jsx";
import Project from "../Project/Project.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import Modal from "../Modal/Modal.jsx";

const MainView = () => {

    const modal = useRef();

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
        const {title, description, dueDate} = newProject;

        if (title.trim() === '' ||
            description.trim() === '' ||
            dueDate.trim() === ''
        ) {
            modal.current.open();
        } else {


            setTabButtons((prevTabButtons) => [...prevTabButtons, title]);
            setProjects((prevProjects) => [
                ...prevProjects,
                {
                    title,
                    description,
                    dueDate,
                    tasks: [],
                },
            ]);
        }
    };

    const handleProjectDelete = projectIndex => {
        setTabButtons(prevTabButtons => {
            const updatedTabButtons = [...prevTabButtons];
            updatedTabButtons.splice(projectIndex, 1);
            return updatedTabButtons;
        });

        setProjects(prevProjects => {
            const updatedProjects = [...prevProjects];
            updatedProjects.splice(projectIndex, 1);
            return updatedProjects;
        });

        setSelectedButton(null);
    };

    const handleTaskAdd = (projectIndex, newTask) => {
        setProjects((prevProjects) => {
            const updatedProjects = [...prevProjects];
            updatedProjects[projectIndex].tasks.push(newTask);
            return updatedProjects;
        });
    };

    const handleTaskDelete = (projectIndex, taskIndex) => {
        setProjects((prevProjects) => {
            const updatedProjects = [...prevProjects];
            updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
            return updatedProjects;
        });
    };

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-center mb-4 text-lg">Invalid Input</h2>
                <p>You should complete all fields to add a new project.</p>
                <p className="mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="flex w-full h-screen">
                <AsideMenu
                    menuTitle="Your projects"
                    onClickTabButton={handleSelect}
                    tabButtons={tabButtons}
                    selectedButton={selectedButton}
                    toggleAddProject={toggleAddProject}
                />
                {addProjectIsOpen &&
                    <AddProject onSaveClick={handleSaveClick} onCancelClick={toggleAddProject}/>
                }
                {!addProjectIsOpen && selectedButton !== null && selectedButton >= 0 && selectedButton < projects.length && (
                    <div className="flex flex-col w-full">
                        <Project
                            projectIndex={selectedButton}
                            projectName={tabButtons[selectedButton]}
                            date={projects[selectedButton].dueDate}
                            description={projects[selectedButton].description}
                            onProjectDelete={handleProjectDelete}
                        />
                        <Tasks
                            labelText="Tasks"
                            tasks={projects[selectedButton].tasks}
                            onTaskAdd={(newTask) => handleTaskAdd(selectedButton, newTask)}
                            onTaskDelete={(taskIndex) => handleTaskDelete(selectedButton, taskIndex)}
                        />
                    </div>

                )}
                {!addProjectIsOpen && selectedButton === null && (
                    <NoProjectSelected onCreateClick={toggleAddProject}/>
                )}
            </div>
        </>
    );
};

export default MainView;

// @TODO: Rewrite all the app to typescript, change styles to more colorful ones
