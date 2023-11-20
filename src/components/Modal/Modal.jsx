import React, {useContext, useEffect, useRef} from 'react';
import { createPortal} from "react-dom";
import {ProjectContext} from "../../store/project-management-context.jsx";

function Modal({ open, children }) {
    const dialog = useRef();

    const { onCloseModal } = useContext(ProjectContext);

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal (
        <dialog ref={dialog} className="dialog" onClose={onCloseModal}>
            {open ? children : null}
        </dialog>, document.getElementById('modal-root')
    );
}

export default Modal;