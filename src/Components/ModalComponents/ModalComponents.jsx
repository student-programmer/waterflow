import React from 'react';
import './ModalComponents.css';

const ModalComponents = ({ toggleModal }) => {
    return (
        <div className='ModalComponents'>
            <div className='inform'>
                <p className='headingModal'>Путишествие по водопадам Крыма</p>
                <p className='bodyModalText'>
                    Вы готовы окунуться в незабываемое преключения? Пройтись по
                    всем водопадам Крыма не покидая своего дома? Расширить свой
                    кругозор? Если да то отправляйся в путешествие вместе с нами
                    я тебе гарантирую оно будет незабываемым.
                </p>
            </div>
            <button className='continue' onClick={toggleModal}>
                Отправится в путешествие
            </button>
        </div>
    );
};

export default ModalComponents;
