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

    const handleDeleteClick = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        });
    };

    const handleChange = (fieldIdentifier, newValue) => {
        setTaskInputValue(prevInputValue => ({
            ...prevInputValue,
            [fieldIdentifier]: newValue
        }));
    };

    return (
        <div className="tasks-container">
            <div className="flex flex-col">
                <label className="tasks-label">{labelText}</label>
                <div className="mb-12">
                    <input
                        type="text"
                        className="tasks-input"
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
                <div className="added-tasks">
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            taskName={task}
                            onDelete={() => handleDeleteClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;