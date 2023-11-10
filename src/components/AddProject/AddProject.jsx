import React, {useState} from 'react';
import ProjectInput from "../ProjectInput/ProjectInput.jsx";
import Button from "../Button/Button.jsx";
import {INITIAL_FIELDS} from "../../constants/data.js";

const AddProject = ({ onSaveClick, onCancelClick }) => {
    const [fieldsValue, setFieldsValue] = useState(INITIAL_FIELDS);

    const handleChange = (fieldIdentifier, newValue) => {
        setFieldsValue(prevFieldsValue => ({
            ...prevFieldsValue,
            [fieldIdentifier]: newValue
        }));
    };

    const resetFields = () => {
        setFieldsValue(INITIAL_FIELDS);
    };

    const handleSave = () => {
        onSaveClick(fieldsValue);
    };


    return (
        <div className="add-project-container">
            <div className="inner-container">
                <menu className="self-end">
                    <Button
                        className="add-project-cancel-button"
                        onClick={() => {
                            onCancelClick()
                            resetFields();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="add-project-save-button"
                        onClick={() => {
                            handleSave();
                            resetFields();
                        }}
                    >
                        Save
                    </Button>
                </menu>
                <main className="flex flex-col w-full">
                    <ProjectInput
                        labelText="title"
                        type="text"
                        value={fieldsValue.title}
                        onChange={(event) =>
                            handleChange('title', event.target.value)
                        }
                    />
                    <ProjectInput
                        labelText="description"
                        type="text"
                        field="textarea"
                        value={fieldsValue.description}
                        onChange={(event) =>
                            handleChange('description', event.target.value)
                        }
                    />
                    <ProjectInput
                        labelText="due date"
                        type="date"
                        value={fieldsValue.dueDate}
                        onChange={(event) =>
                            handleChange('dueDate', event.target.value)
                        }
                    />
                </main>
            </div>
        </div>
    );
};

export default AddProject;