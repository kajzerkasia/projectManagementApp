import React, {useState} from 'react';
import {INITIAL_TASK} from "../../constants/data.js";
import Button from "../Button/Button.jsx";
import Task from "../Task/Task.jsx";

const Tasks = ({labelText}) => {
    const [taskInputValue, setTaskInputValue] = useState(INITIAL_TASK);
    const [tasks, setTasks] = useState([]);

    const resetInputValue = () => {
        setTaskInputValue(INITIAL_TASK);
    };

    const handleAddClick = () => {
        const newTask = taskInputValue.task;
        setTasks((prevTasks) => [...prevTasks, newTask]);
        resetInputValue();
    }

    const handleChange = (fieldIdentifier, newValue) => {
        setTaskInputValue(prevInputValue => ({
            ...prevInputValue,
            [fieldIdentifier]: newValue
        }));
    };

    return (
        <div className="flex h-screen flex-col items-start w-3/5 pl-4 ml-12 mb-32">
            <div className="flex flex-col">
                <label className="text-4xl font-bold text-warm-grey my-4">{labelText}</label>
                <div className="mb-12">
                    <input
                        type="text"
                        className="bg-very-light-grey w-96 p-1"
                        value={taskInputValue.task}
                        onChange={(event) =>
                            handleChange('task', event.target.value)
                        }
                    />
                    <Button
                        className="ml-4"
                        onClick={handleAddClick}
                    >
                        Add Task
                    </Button>
                </div>
                <div className="bg-the-lightest-grey w-full p-4">
                    {tasks.map((task, index) => (
                        <Task key={index} taskName={task}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;

// @TODO: Move styles to index.css, fix display of tasks