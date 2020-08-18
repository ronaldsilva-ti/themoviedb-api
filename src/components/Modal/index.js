import React from 'react';
import ReactDOM from 'react-dom';
import { UiModal, UiModal__Overlay,  CloseButton } from './ModalStyles';

const portalRoot = document.getElementById('portal-root');


export default function Modal({children, isOpen, onClickClose}){

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <UiModal__Overlay>
            <UiModal>
                 <CloseButton type="button" onClick={onClickClose}>X</CloseButton>
                 {children}
            </UiModal>            
        </UiModal__Overlay>,
        portalRoot
    )
}