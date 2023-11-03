import React from 'react';
import Task from "../Task/Task.jsx";
import TaskInput from "../TaskInput/TaskInput.jsx";

const Tasks = () => {
    return (
        <>
            <div>
                <TaskInput/>
            </div>
            <div>
                <Task taskName="Learn advanced concepts"/>
                <Task taskName="Learn the basics"/>
            </div>
        </>
    );
};

export default Tasks;