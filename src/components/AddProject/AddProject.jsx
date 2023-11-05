import React from 'react';
import ProjectInput from "../ProjectInput/ProjectInput.jsx";
import Button from "../Button/Button.jsx";

const AddProject = ({ fieldsValue, onChange, onSaveClick, onCancelClick, onReset }) => {

    return (
        <div className="add-project-container">
            <div className="inner-container">
                <menu className="self-end">
                    <Button
                        className="add-project-cancel-button"
                        onClick={() => {
                            onCancelClick()
                            onReset()
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="add-project-save-button"
                        onClick={() => {
                            onSaveClick()
                            onReset()
                        }}
                    >
                        Save
                    </Button>
                </menu>
                <main className="flex flex-col w-full">
                    <ProjectInput
                        labelText="title"
                        type="text"
                        fieldValue={fieldsValue.title}
                        onChange={(event) =>
                            onChange('title', event.target.value)
                        }
                    />
                    <ProjectInput
                        labelText="description"
                        type="text"
                        field="textarea"
                        fieldValue={fieldsValue.description}
                        onChange={(event) =>
                            onChange('description', event.target.value)
                        }
                    />
                    <ProjectInput
                        labelText="due date"
                        type="date"
                        fieldValue={fieldsValue.dueDate}
                        onChange={(event) =>
                            onChange('dueDate', event.target.value)
                        }
                    />
                </main>
            </div>
        </div>
    );
};

export default AddProject;