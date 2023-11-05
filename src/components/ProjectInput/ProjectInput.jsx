import React from 'react';

const ProjectInput = ({ labelText, type, field}) => {
    return (
        <>
            <label className="project-input-label">{labelText}</label>
            {field === 'textarea' ?
                <textarea className="project-input-and-textarea"></textarea>
                :
                <input type={type} className="project-input-and-textarea"/>
            }
        </>
    );
};

export default ProjectInput;