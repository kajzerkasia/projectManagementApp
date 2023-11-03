import React from 'react';

const Task = ({taskName}) => {
    return (
        <div>
        <p>{taskName}</p>
        <button>Clear</button>
        </div>
    );
};

export default Task;