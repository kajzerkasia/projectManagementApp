import React from 'react';

const Task = ({taskName, onDelete}) => {
    return (
        <div className="flex my-4 px-4 justify-between">
            <p>{taskName}</p>
            <button
                className="ml-4"
                onClick={onDelete}
            >
                Clear
            </button>
        </div>
    );
};

export default Task;