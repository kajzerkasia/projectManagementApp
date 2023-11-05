import React from 'react';
import homePageIcon from '../../assets/no-projects.png';
import Button from "../Button/Button.jsx";

const Home = ({ onCreateClick }) => {
    return (
        <div className="inner-container">
            <img src={homePageIcon} alt="No Projects Icon" className="img"/>
            <h1 className="home-h1">No Project Selected</h1>
            <p className="text-light-warm-grey">Select a project or get started with a new one</p>
            <Button className="home-button" onClick={onCreateClick}>Create new project</Button>
        </div>
    );
};

export default Home;