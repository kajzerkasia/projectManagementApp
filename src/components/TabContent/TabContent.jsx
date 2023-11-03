import React from 'react';

const TabContent = ({ projectName, date, description}) => {
    return (
        <div>
            <h1>{projectName}</h1>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};

export default TabContent;