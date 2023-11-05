import React from 'react';

const Project = ({ projectName, date, description }) => {

    return (
        <div>
            <h1>{projectName}</h1>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};

export default Project;