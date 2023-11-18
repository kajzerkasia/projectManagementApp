import React, {useContext} from 'react';
import Button from "../Button/Button.jsx";
import {ProjectContext} from "../../store/project-management-context.jsx";

const Project = ({projectIndex, projectName, date, description }) => {
    const { onDeleteProject } = useContext(ProjectContext);

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="project-container">
            <div className="self-end pr-4">
                <Button onClick={() => onDeleteProject(projectIndex)}>Delete</Button>
            </div>
            <h1 className="project-h1">{projectName}</h1>
            <p className="project-p">{formattedDate}</p>
            <p className="pl-4 pb-4 ml-12 whitespace-pre-wrap">{description}</p>
            <div className="project-border-bottom"></div>
        </div>
    );
};

export default Project;