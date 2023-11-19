import React, { useEffect, useRef } from 'react';
import { createPortal} from "react-dom";
import Button from "../Button/Button.jsx";

function Modal({ open, children, onClose, buttonCaption }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);


    return createPortal (
        <dialog ref={dialog} className="dialog" onClose={onClose}>
            {children}
            <form method="dialog" className="text-center mt-4">
                <Button className="w-20 mt-4 mx-0 py-2 bg-darker-warm-grey ml-2 rounded text-almost-white hover:bg-black hover:text-white text-base">{buttonCaption}</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    );
}

export default Modal;