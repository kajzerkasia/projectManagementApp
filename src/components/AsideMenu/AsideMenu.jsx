import React from 'react';
import Tabs from "../Tabs/Tabs.jsx";

const AsideMenu = ({title}) => {
    return (
        <div className="flex flex-col items-start w-96 h-screen bg-black mt-10 text-almost-white rounded-tr-xl font-main">
            <h1 className="uppercase font-bold pt-20 pb-12 text-2xl text-almost-white ml-8">{title}</h1>
            <button className="w-36 mb-10 mx-0 py-2 bg-warm-gray ml-8 rounded text-aside-text-gray text-lg hover:bg-lighter-warm-gray hover:text-almost-white">+ Add Project</button>
            <Tabs className="flex flex-col ml-8 text-aside-text-gray"/>
        </div>
    );
};

export default AsideMenu;