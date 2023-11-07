import React from 'react';
import Task from "../Task/Task.jsx";
import TaskInput from "../TaskInput/TaskInput.jsx";

const Tasks = () => {
    return (
        <div className="flex h-screen flex-col items-start w-3/5 pl-4 ml-12 mb-32">
            <div>
                <TaskInput labelText="Tasks"/>
            </div>
            <div className="bg-the-lightest-grey w-full">
                <Task taskName="Learn advanced concepts"/>
                <Task taskName="Learn the basics"/>
            </div>
        </div>
    );
};

export default Tasks;