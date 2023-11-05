import React, {useState} from 'react';
import AsideMenu from "../AsideMenu/AsideMenu.jsx";
import AddProject from "../AddProject/AddProject.jsx";
import Home from "../Home/Home.jsx";

const MainView = () => {

    const [tabButtons, setTabButtons] = useState([]);
    const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);

    const handleClick = () => {
        setAddProjectIsOpen(isOpen => !isOpen);
    }

    const [fieldsValue, setFieldsValue] = useState({
        title: '',
        description: '',
        dueDate: '',
    })

    const handleChange = (inputIdentifier, newValue) => {
        setFieldsValue(prevFieldsValue => {
            return {
                ...prevFieldsValue,
                [inputIdentifier]: newValue
            }
        })
    }

    const handleSaveClick = () => {

        const newTabButton = fieldsValue.title;

        setTabButtons((prevTabButtons) => {
            const updatedTabButtons = [...prevTabButtons];
            updatedTabButtons.push(newTabButton);
            return updatedTabButtons;
        })
    };

    return (
        <div className="flex w-full h-screen">
            <AsideMenu
                menuTitle="Your projects"
                onClick={handleClick}
                projectsTitle={fieldsValue}
                tabButtons={tabButtons}
            />
            {addProjectIsOpen ?
                <AddProject
                    fieldsValue={fieldsValue}
                    onChange={handleChange}
                    onSaveClick={handleSaveClick}
                />
                :
                <Home/>
            }
        </div>
    );
};

export default MainView;