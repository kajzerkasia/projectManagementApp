import React from 'react';
import noProjectImage from '../../assets/no-projects.png';
import Button from "../Button/Button.jsx";

const NoProjectSelected = ({ onCreateClick }) => {
    return (
        <div className="inner-container">
            <img src={noProjectImage} alt="An empty task list" className="img"/>
            <h1 className="no-project-selected-h1">No Project Selected</h1>
            <p className="text-light-warm-grey">Select a project or get started with a new one</p>
            <Button className="no-project-selected-button" onClick={onCreateClick}>Create new project</Button>
        </div>
    );
};

export default NoProjectSelected;