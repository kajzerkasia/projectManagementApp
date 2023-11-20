import React, {useContext} from 'react';
import noProjectImage from '../assets/no-projects.png';
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import {ProjectContext} from "../store/project-management-context.jsx";

const NoProjectSelected = () => {
    const { onToggleAddProject } = useContext(ProjectContext);

    return (
        <Container>
            <img src={noProjectImage} alt="An empty task list" className="img"/>
            <h1 className="no-project-selected-h1">No Project Selected</h1>
            <p className="text-light-warm-grey">Select a project or get started with a new one</p>
            <Button className="no-project-selected-button" onClick={onToggleAddProject}>Create new project</Button>
        </Container>
    );
};

export default NoProjectSelected;