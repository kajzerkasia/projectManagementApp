import React from 'react';
import Section from "../Section/Section.jsx";
import Project from "../Project/Project.jsx";
import Tasks from "../Tasks/Tasks.jsx";

const TabContent = () => {
    return (
        <div>
            <Section>
                <Project/>
            </Section>
            <Section>
                <Tasks/>
            </Section>
        </div>
    );
};

export default TabContent;