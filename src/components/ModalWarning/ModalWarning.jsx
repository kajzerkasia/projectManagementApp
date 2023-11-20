import React, {useContext, useEffect, useState} from 'react';
import Button from "../Button/Button.jsx";
import {ProjectContext} from "../../store/project-management-context.jsx";

const TIMER = 5000;
const ModalWarning = ({buttonCaption}) => {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    const {onCloseModal} = useContext(ProjectContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            onCloseModal();
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [onCloseModal]);


    return (
        <form method="dialog" className="text-center mt-4">
            <h2 className="text-center mb-4 text-lg">Invalid Input</h2>
            <p>You should complete all fields.</p>
            <p className="mb-4">Please make sure you provide a valid value for every input field.</p>
            <div className="flex flex-col justify-center items-center">
                <Button className="w-20 my-4 mx-0 py-2 bg-darker-warm-grey ml-2 rounded text-almost-white hover:bg-black hover:text-white text-base" onClick={onCloseModal}>{buttonCaption}</Button>
                <progress value={remainingTime} max={TIMER}/>
            </div>
        </form>
    );
};

export default ModalWarning;