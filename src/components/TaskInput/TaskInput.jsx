import React from 'react';

const TaskInput = ({labelText}) => {
    return (
        <div className="flex flex-col">
            <label className="text-4xl font-bold text-warm-grey my-4">{labelText}</label>
            <div className="mb-12">
                <input type="text" className="bg-very-light-grey w-96 p-1"/>
                <button className="ml-4">Add Task</button>
            </div>
        </div>
    );
};

export default TaskInput;