import React, {useContext, useState} from 'react';
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import {INITIAL_FIELDS} from "../../constants/data.js";
import Container from "../Container/Container.jsx";
import { ProjectContext } from "../../store/project-management-context.jsx";

const AddProject = () => {
    const { onToggleAddProject, onAddProject } = useContext(ProjectContext);

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
        onAddProject(fieldsValue);
    };


    return (
        <div className="add-project-container">
            <Container>
                <menu className="self-end">
                    <Button
                        className="add-project-cancel-button"
                        onClick={() => {
                            onToggleAddProject()
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
                    <Input
                        labelText="title"
                        type="text"
                        value={fieldsValue.title}
                        onChange={(event) =>
                            handleChange('title', event.target.value)
                        }
                    />
                    <Input
                        labelText="description"
                        type="text"
                        field="textarea"
                        value={fieldsValue.description}
                        onChange={(event) =>
                            handleChange('description', event.target.value)
                        }
                    />
                    <Input
                        labelText="due date"
                        type="date"
                        value={fieldsValue.dueDate}
                        onChange={(event) =>
                            handleChange('dueDate', event.target.value)
                        }
                    />
                </main>
            </Container>
        </div>
    );
};

export default AddProject;