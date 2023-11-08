import React from 'react';

const Task = ({taskName, onDelete}) => {
    return (
        <div className="added-tasks">
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