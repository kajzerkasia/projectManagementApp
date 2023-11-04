import React from 'react';

const ProjectInput = ({ labelText, type }) => {
    return (
        <>
            <label>{labelText}</label>
            <input type={type}/>
        </>
    );
};

export default ProjectInput;