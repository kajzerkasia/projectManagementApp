import React, {useRef, useState} from 'react';
import {INITIAL_TASK} from "../../constants/data.js";
import Button from "../Button/Button.jsx";
import Task from "../Task/Task.jsx";
import Input from "../Input/Input.jsx";
import Modal from "../Modal/Modal.jsx";

const Tasks = ({labelText, tasks, onTaskAdd, onTaskDelete}) => {
    const [taskInputValue, setTaskInputValue] = useState(INITIAL_TASK);
    const modal = useRef();

    const resetInputValue = () => {
        setTaskInputValue(INITIAL_TASK);
    };

    const handleAddClick = () => {
        if (taskInputValue.task.trim() === '') {
            modal.current.open();
            return;
        }

        const newTask = taskInputValue.task;
        onTaskAdd(newTask);
        resetInputValue();
    };

    const handleChange = (fieldIdentifier, newValue) => {
        setTaskInputValue((prevInputValue) => ({
            ...prevInputValue,
            [fieldIdentifier]: newValue,
        }));
    };

    const handleDeleteClick = (index) => {
        onTaskDelete(index);
    };

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-center mb-4 text-lg">Invalid Input</h2>
                <p>You should fill the input to add a new task.</p>
                <p className="mb-4">Please make sure you provide a valid value for input field.</p>
            </Modal>
            <div className="tasks-container">
                <div className="flex flex-col">
                    <label className="tasks-label">{labelText}</label>
                    <div className="mb-12">
                        <Input
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
                    {tasks.length === 0 &&
                        <p className="text-darker-warm-grey">This project does not have any tasks yet.</p>
                    }
                    {tasks.length > 0 &&
                        <div>
                            {tasks.map((task, index) => (
                                <Task
                                    key={index}
                                    taskName={task}
                                    onClick={() => handleDeleteClick(index)}
                                />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Tasks;