import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import { createPortal} from "react-dom";
import Button from "../Button/Button.jsx";

const Modal = forwardRef(function Modal ({ children, buttonCaption }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal (
        <dialog ref={dialog} className="dialog">
            {children}
            <form method="dialog" className="text-center mt-4">
                <Button className="w-20 mt-4 mx-0 py-2 bg-darker-warm-grey ml-2 rounded text-almost-white hover:bg-black hover:text-white text-base">{buttonCaption}</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    );
});

export default Modal;