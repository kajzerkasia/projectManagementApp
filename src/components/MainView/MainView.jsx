import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";

const MainView = () => {

    const [tabButtons, setTabButtons] = useState([]);
    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);
    const [isTabButtonClicked, setIsTabButtonClicked] = useState(false);
    const [selectedTabIndex, setSelectedTabIndex] = useState(null);

    const handleTabButtonClick = (index) => {
        setSelectedTabIndex(index);
        setIsTabButtonClicked(isClicked => !isClicked);
    };

    const handleClick = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    }

    const initialFieldsValues = {
        title: '',
        description: '',
        dueDate: '',
    };

    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        dueDate: '',
    });

    const [fieldsValue, setFieldsValue] = useState(initialFieldsValues);

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

        setProjectData(fieldsValue);
    };

    const resetFields = () => {
        setFieldsValue(initialFieldsValues);
    };

    return (
        <div className="flex w-full h-screen">
            <AsideMenu
                menuTitle="Your projects"
                onClick={handleClick}
                projectsTitle={fieldsValue}
                tabButtons={tabButtons}
                onTabButtonClick={handleTabButtonClick}
            />
            {addProjectIsOpen &&
                <AddProject
                    fieldsValue={fieldsValue}
                    onChange={handleChange}
                    onSaveClick={handleSaveClick}
                    onCancelClick={handleClick}
                    onReset={resetFields}
                />
            }
            {isTabButtonClicked && !addProjectIsOpen && selectedTabIndex !== null && (
                <Project
                    projectName={tabButtons[selectedTabIndex]}
                    date={projectData.dueDate}
                    description={projectData.description}
                />
            )}
        </div>
    );
};

export default MainView;

// @TODO: display components correctly (ternary operators)