import React from 'react';
import ProjectInput from "../ProjectInput/ProjectInput.jsx";
import Button from "../Button/Button.jsx";

const AddProject = () => {
    return (
        <div className="add-project-container">
            <div className="inner-container">
                <menu className="self-end">
                    <Button className="add-project-cancel-button">Cancel</Button>
                    <Button className="add-project-save-button">Save</Button>
                </menu>
                <main className="flex flex-col w-full">
                    <ProjectInput labelText="title" type="text"/>
                    <ProjectInput labelText="description" type="text" field="textarea"/>
                    <ProjectInput labelText="due date" type="date"/>
                </main>
            </div>
        </div>
    );
};

export default AddProject;