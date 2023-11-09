import React from 'react';
import TabButton from "../TabButton/TabButton.jsx";
import Button from "../Button/Button.jsx";

export const AsideMenu = ({menuTitle, onClickTabButton, toggleAddProject, tabButtons, selectedButton}) => {

    const handleTabButtonClick = (index) => {

        if (index === selectedButton) {
            onClickTabButton(null);
        } else {
            onClickTabButton(index);
        }
    };

    return (
        <div className="aside-menu-container">
            <h1 className="aside-menu-h1">{menuTitle}</h1>
            <Button className="aside-menu-button" onClick={toggleAddProject}>+ Add Project</Button>
            {tabButtons.map((buttonTitle, index) => (
                <TabButton
                    key={index}
                    onClick={() => handleTabButtonClick(index)}
                    active={index === selectedButton}
                >
                    {buttonTitle}
                </TabButton>
            ))}
        </div>
    );
};

export default AsideMenu;