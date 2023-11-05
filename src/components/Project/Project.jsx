import React from 'react';
import Button from "../Button/Button.jsx";

const Project = ({projectName, date, description}) => {

    return (
        <div className="project-container ">
            <div className="self-end pr-4">
                <Button>Delete</Button>
            </div>
            <h1 className="project-h1">{projectName}</h1>
            <p className="project-p">{date}</p>
            <p className="pl-4 pb-4 ml-12">{description}</p>
            <div className="project-border-bottom"></div>
        </div>
    );
};

export default Project;