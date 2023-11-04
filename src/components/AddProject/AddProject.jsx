import React from 'react';
import ProjectInput from "../ProjectInput/ProjectInput.jsx";
import Button from "../Button/Button.jsx";

const AddProject = () => {
    return (
        <div className="flex h-screen flex-col justify-center items-center w-full">
            <div className="flex h-screen flex-col justify-center items-center w-2/5">
                <menu className="self-end">
                    <Button className="w-20 mb-10 mx-0 py-2 bg-transparent ml-2 rounded text-darker-warm-grey hover:text-black text-base">Cancel</Button>
                    <Button className="w-20 mb-10 mx-0 py-2 bg-darker-warm-grey ml-2 rounded text-almost-white hover:bg-black hover:text-white text-base">Save</Button>
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