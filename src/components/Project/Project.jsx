import React from 'react';
import Button from "../Button/Button.jsx";

const Project = ({projectName, date, description}) => {

    return (
        <div className="flex h-screen flex-col justify-center items-start w-3/5">
            <div className="self-end pr-4">
                <Button>Delete</Button>
            </div>
            <h1 className="text-4xl font-bold pm-4 pl-4 ml-12 text-warm-grey">{projectName}</h1>
            <p className="p-4 ml-12 text-light-warm-grey font-bold">{date}</p>
            <p className="pl-4 pb-4 ml-12">{description}</p>
            <div className="bg-very-light-grey h-1 w-full ml-16 mt-2"></div>
        </div>
    );
};

export default Project;