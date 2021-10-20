import React from 'react';
import modal from './Modal.module.css';
import ModalComponents from './ModalComponents';
const Modal = ({ toggleModal }) => {
    return (
        <div className={modal.wrapper} >
            <div
                onClick={(event) => event.stopPropagation()}
                className={modal.modalContent}
            >
                <ModalComponents toggleModal={toggleModal} />
            </div>
        </div>
    );
};

export default Modal;
