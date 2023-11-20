import React, {useContext} from 'react';
import AsideMenu from "./AsideMenu.jsx";
import AddProject from "./AddProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import Project from "./Project.jsx";
import Tasks from "./Tasks.jsx";
import Modal from "./Modal.jsx";
import TabButton from "./TabButton.jsx";
import {ProjectContext} from "../store/project-management-context.jsx";
import ModalWarning from "./ModalWarning.jsx";

const MainView = () => {
    const { tabButtons, addProjectIsOpen, selectedButton, projects, onTabButtonClick, onTaskAdd, onTaskDelete, modalIsOpen } = useContext(ProjectContext);


    return (
        <>
            <Modal open={modalIsOpen}>
                <ModalWarning buttonCaption="Close" />
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

