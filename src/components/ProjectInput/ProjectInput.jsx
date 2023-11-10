import React from 'react';

const ProjectInput = ({ labelText, field, ...props}) => {
    return (
        <>
            <label className="project-input-label">{labelText}</label>
            {field === 'textarea' ?
                <textarea
                    className="project-input-and-textarea"
                    {...props}
                >
                </textarea>
                :
                <input
                    className="project-input-and-textarea"
                    {...props}
                />
            }
        </>
    );
};

export default ProjectInput;