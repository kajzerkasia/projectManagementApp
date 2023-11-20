import React, { useContext, useEffect } from 'react';
import Button from "./Button.jsx";
import {ProjectContext} from "../store/project-management-context.jsx";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 5000;
const ModalWarning = ({buttonCaption}) => {
    const {onCloseModal} = useContext(ProjectContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            onCloseModal();
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [onCloseModal]);

    return (
        <form method="dialog" className="modal-form">
            <h2 className="modal-h2">Invalid Input</h2>
            <p>You should complete all fields.</p>
            <p className="mb-4">Please make sure you provide a valid value for every input field.</p>
            <div className="modal-div">
                <Button className="modal-button" onClick={onCloseModal}>{buttonCaption}</Button>
                <ProgressBar timer={TIMER}/>
            </div>
        </form>
    );
};

export default ModalWarning;