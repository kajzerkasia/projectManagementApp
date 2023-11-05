import React from 'react';

const ProjectInput = ({ labelText, type, field, onChange, fieldValue, ...props}) => {
    return (
        <>
            <label className="project-input-label">{labelText}</label>
            {field === 'textarea' ?
                <textarea
                    className="project-input-and-textarea"
                    onChange={onChange}
                    value={fieldValue}
                    {...props}
                >
                </textarea>
                :
                <input
                    type={type}
                    onChange={onChange}
                    value={fieldValue}
                    className="project-input-and-textarea"
                    {...props}
                />
            }
        </>
    );
};

export default ProjectInput;