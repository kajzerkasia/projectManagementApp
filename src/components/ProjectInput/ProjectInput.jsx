import React from 'react';

const ProjectInput = ({ labelText, type, field}) => {
    return (
        <>
            <label className="uppercase text-light-warm-grey font-bold">{labelText}</label>
            {field === 'textarea' ?
                <textarea className="bg-very-light-grey text-light-warm-grey p-2 mb-4"></textarea>
                :
                <input type={type} className="bg-very-light-grey text-light-warm-grey p-2 mb-4"/>
            }
        </>
    );
};

export default ProjectInput;