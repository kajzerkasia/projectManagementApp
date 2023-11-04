import React from 'react';
import ProjectInput from "../ProjectInput/ProjectInput.jsx";
import Button from "../Button/Button.jsx";

const AddProject = () => {
    return (
        <>
            <div>
                <Button>Cancel</Button>
                <Button>Save</Button>
            </div>
            <main>
                <ProjectInput labelText="title" type="text"/>
                <ProjectInput labelText="description" type="text"/>
                <ProjectInput labelText="due date" type="date"/>
            </main>
        </>
    );
};

export default AddProject;