import React from 'react';
import Button from "./Button.jsx";

const Task = ({taskName, ...props}) => {
    return (
        <div className="added-tasks">
            <p>{taskName}</p>
            <Button
                {...props}
                className="ml-4 hover:text-red-500"
            >
                Clear
            </Button>
        </div>
    );
};

export default Task;