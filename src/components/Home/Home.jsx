import React from 'react';
import homePageIcon from '../../assets/no-projects.png';
import Button from "../Button/Button.jsx";

const Home = () => {
    return (
        <div className="flex h-screen flex-col justify-center items-center w-3/5">
            <img src={homePageIcon} alt="No Projects Icon" className="w-16 h-16 object-contain mx-auto mb-4"/>
            <h1 className="font-bold text-light-warm-grey text-lg mb-4">No Project Selected</h1>
            <p className="text-light-warm-grey">Select a project or get started with a new one</p>
            <Button className="w-40 mb-10 mx-0 py-2 bg-darker-warm-grey ml-2 rounded text-almost-white hover:bg-black hover:text-white text-base mt-8">Create new project</Button>
        </div>
    );
};

export default Home;