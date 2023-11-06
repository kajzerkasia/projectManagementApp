import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";

const MainView = () => {

    const [tabButtons, setTabButtons] = useState([]);
    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [fieldsValue, setFieldsValue] = useState(INITIAL_FIELDS);

    const handleSelect = selectedButton => {
        setSelectedButton(selectedButton);
        setAddProjectIsOpen(false);
    };

    const toggleAddProject = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    };


    const handleChange = (fieldIdentifier, newValue) => {
        setFieldsValue(prevFieldsValue => {
            return {
                ...prevFieldsValue,
                [fieldIdentifier]: newValue
            }
        })
    }

    const handleSaveClick = () => {

        const newTabButton = fieldsValue.title;

        setTabButtons((prevTabButtons) => {
            const updatedTabButtons = [...prevTabButtons];
            updatedTabButtons.push(newTabButton);
            return updatedTabButtons;
        });

        setProjects(prevProjects => [
            ...prevProjects,
            {
                title: fieldsValue.title,
                description: fieldsValue.description,
                dueDate: fieldsValue.dueDate,
            },
        ]);
    };

    const resetFields = () => {
        setFieldsValue(INITIAL_FIELDS);
    };

    return (
        <div className="flex w-full h-screen">
            <AsideMenu
                menuTitle="Your projects"
                onClickTabButton={handleSelect}
                tabButtons={tabButtons}
                selectedButton={selectedButton}
                toggleAddProject={toggleAddProject}
            />
            {addProjectIsOpen &&
                <AddProject
                    fieldsValue={fieldsValue}
                    onChange={handleChange}
                    onSaveClick={handleSaveClick}
                    onCancelClick={toggleAddProject}
                    onReset={resetFields}
                />
            }
            {!addProjectIsOpen && selectedButton !== null && selectedButton >= 0 && selectedButton < projects.length && (
                <Project
                    projectName={tabButtons[selectedButton]}
                    date={projects[selectedButton].dueDate}
                    description={projects[selectedButton].description}
                />
            )}
            {!addProjectIsOpen && selectedButton === null && (
                <Home onCreateClick={toggleAddProject}/>
            )}
        </div>
    );
};

export default MainView;
