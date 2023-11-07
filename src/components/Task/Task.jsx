import React from 'react';

const Task = ({taskName}) => {
    return (
        <div className="flex my-4 px-4 justify-between">
            <p>{taskName}</p>
            <button className="ml-4">Clear</button>
        </div>
    );
};

export default Task;