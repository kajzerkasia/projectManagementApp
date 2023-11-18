import React, {useContext, useRef, useState} from 'react';
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
    const { tabButtons, addProjectIsOpen, selectedButton, projects, onTabButtonClick, onTaskAdd, onTaskDelete} = useContext(ProjectContext);


    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-center mb-4 text-lg">Invalid Input</h2>
                <p>You should complete all fields to add a new project.</p>
                <p className="mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="flex w-full h-screen">
                <AsideMenu menuTitle="Your projects">
                    {tabButtons.map((buttonTitle, index) => (
                        <TabButton
                            key={index}
                            onClick={() => onTabButtonClick(index)}
                            active={index === selectedButton}
                        >
                            {buttonTitle}
                        </TabButton>
                    ))}
                </AsideMenu>
                {addProjectIsOpen && <AddProject />}
                {!addProjectIsOpen && selectedButton !== null && selectedButton >= 0 && selectedButton < projects.length && (
                    <div className="flex flex-col w-full">
                        <Project
                            projectIndex={selectedButton}
                            projectName={tabButtons[selectedButton]}
                            date={projects[selectedButton].dueDate}
                            description={projects[selectedButton].description}
                        />
                        <Tasks
                            labelText="Tasks"
                            tasks={projects[selectedButton].tasks}
                            onTaskAdd={(newTask) => onTaskAdd(selectedButton, newTask)}
                            onTaskDelete={(taskIndex) => onTaskDelete(selectedButton, taskIndex)}
                        />
                    </div>
                )}
                {!addProjectIsOpen && selectedButton === null && <NoProjectSelected />}
            </div>
        </>
    );
};

export default MainView;

