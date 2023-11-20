import React, {useContext, useState} from 'react';
import {INITIAL_TASK} from "../../constants/data.js";
import Button from "../Button/Button.jsx";
import Task from "../Task/Task.jsx";
import Input from "../Input/Input.jsx";
import Modal from "../Modal/Modal.jsx";
import {ProjectContext} from "../../store/project-management-context.jsx";
import ModalWarning from "../ModalWarning/ModalWarning.jsx";

const Tasks = ({labelText, tasks, onTaskAdd, onTaskDelete}) => {
    const { onOpenModal, modalIsOpen } = useContext(ProjectContext);
    const [taskInputValue, setTaskInputValue] = useState(INITIAL_TASK);

    const resetInputValue = () => {
        setTaskInputValue(INITIAL_TASK);
    };

    const handleAddClick = () => {
        if (taskInputValue.task.trim() === '') {
            onOpenModal();
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
            <Modal open={modalIsOpen}>
                <ModalWarning buttonCaption="Close" />
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