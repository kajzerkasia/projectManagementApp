import React from 'react';
import noProjectImage from '../../assets/no-projects.png';
import Button from "../Button/Button.jsx";
import Container from "../Container/Container.jsx";

const NoProjectSelected = ({ onCreateClick }) => {
    return (
        <Container>
            <img src={noProjectImage} alt="An empty task list" className="img"/>
            <h1 className="no-project-selected-h1">No Project Selected</h1>
            <p className="text-light-warm-grey">Select a project or get started with a new one</p>
            <Button className="no-project-selected-button" onClick={onCreateClick}>Create new project</Button>
        </Container>
    );
};

export default NoProjectSelected;