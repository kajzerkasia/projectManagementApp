import React from 'react';
import TabButton from "../TabButton/TabButton.jsx";

export const AsideMenu = ({menuTitle, onClick, tabButtons, onTabButtonClick}) => {

    return (
            <div className="aside-menu-container">
                <h1 className="aside-menu-h1">{menuTitle}</h1>
                <button className="aside-menu-button" onClick={onClick}>+ Add Project</button>
                {tabButtons.map((buttonTitle, index) => (
                    <TabButton
                        key={index}
                        onClick={() => onTabButtonClick(index)}
                    >
                        {buttonTitle}
                    </TabButton>
                ))}
            </div>
    );
};

export default AsideMenu;