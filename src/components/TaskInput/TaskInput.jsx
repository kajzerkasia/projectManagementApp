import React from 'react';

const TaskInput = ({labelText}) => {
    return (
        <div>
            <label>{labelText}</label>
            <input type="text"/>
            <button>Add Task</button>
        </div>
    );
};

export default TaskInput;