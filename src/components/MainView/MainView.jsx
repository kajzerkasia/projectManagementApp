import React, {useRef, useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import NoProjectSelected from "../NoProjectSelected/NoProjectSelected.jsx";
import Project from "../Project/Project.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import Modal from "../Modal/Modal.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import {ProjectContext} from "../../store/project-management-context.jsx";

const MainView = () => {
    const modal = useRef();

    const [mainViewState, setMainViewState] = useState({
        tabButtons: [],
        addProjectIsOpen: false,
        projects: [],
        selectedButton: null,
    });

    const handleSelect = selectedButton => {
        setMainViewState(prevState => ({...prevState, selectedButton, addProjectIsOpen: false}));
    };

    const toggleAddProject = () => {
        setMainViewState(prevState => ({...prevState, addProjectIsOpen: !prevState.addProjectIsOpen}));
    };

    const handleSaveClick = (newProject) => {
        const {title, description, dueDate} = newProject;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            modal.current.open();
        } else {
            setMainViewState(prevState => ({
                ...prevState,
                tabButtons: [...prevState.tabButtons, title],
                projects: [
                    ...prevState.projects,
                    {
                        title,
                        description,
                        dueDate,
                        tasks: [],
                    },
                ],
            }));
        }
    };

    const handleProjectDelete = projectIndex => {
        setMainViewState(prevState => {
            const updatedTabButtons = [...prevState.tabButtons];
            updatedTabButtons.splice(projectIndex, 1);

            const updatedProjects = [...prevState.projects];
            updatedProjects.splice(projectIndex, 1);

            return {
                ...prevState,
                tabButtons: updatedTabButtons,
                projects: updatedProjects,
                selectedButton: null,
            };
        });
    };

    const handleTaskAdd = (projectIndex, newTask) => {
        setMainViewState(prevState => {
            const updatedProjects = [...prevState.projects];
            updatedProjects[projectIndex].tasks.push(newTask);
            return {...prevState, projects: updatedProjects};
        });
    };

    const handleTaskDelete = (projectIndex, taskIndex) => {
        setMainViewState(prevState => {
            const updatedProjects = [...prevState.projects];
            updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
            return {...prevState, projects: updatedProjects};
        });
    };

    const handleTabButtonClick = (index) => {
        if (index === mainViewState.selectedButton) {
            handleSelect(null);
        } else {
            handleSelect(index);
        }
    };

    const ctxValue = {
        onToggleAddProject: toggleAddProject,
    };

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-center mb-4 text-lg">Invalid Input</h2>
                <p>You should complete all fields to add a new project.</p>
                <p className="mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <ProjectContext.Provider value={ctxValue}>
                <div className="flex w-full h-screen">
                    <AsideMenu menuTitle="Your projects">
                        {mainViewState.tabButtons.map((buttonTitle, index) => (
                            <TabButton
                                key={index}
                                onClick={() => handleTabButtonClick(index)}
                                active={index === mainViewState.selectedButton}
                            >
                                {buttonTitle}
                            </TabButton>
                        ))}
                    </AsideMenu>
                    {mainViewState.addProjectIsOpen && <AddProject onSaveClick={handleSaveClick}/>}
                    {!mainViewState.addProjectIsOpen && mainViewState.selectedButton !== null && mainViewState.selectedButton >= 0 && mainViewState.selectedButton < mainViewState.projects.length && (
                        <div className="flex flex-col w-full">
                            <Project
                                projectIndex={mainViewState.selectedButton}
                                projectName={mainViewState.tabButtons[mainViewState.selectedButton]}
                                date={mainViewState.projects[mainViewState.selectedButton].dueDate}
                                description={mainViewState.projects[mainViewState.selectedButton].description}
                                onProjectDelete={handleProjectDelete}
                            />
                            <Tasks
                                labelText="Tasks"
                                tasks={mainViewState.projects[mainViewState.selectedButton].tasks}
                                onTaskAdd={(newTask) => handleTaskAdd(mainViewState.selectedButton, newTask)}
                                onTaskDelete={(taskIndex) => handleTaskDelete(mainViewState.selectedButton, taskIndex)}
                            />
                        </div>
                    )}
                    {!mainViewState.addProjectIsOpen && mainViewState.selectedButton === null && (
                        <NoProjectSelected/>
                    )}
                </div>
            </ProjectContext.Provider>
        </>
    );
};

export default MainView;

