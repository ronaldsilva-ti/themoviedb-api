import React from 'react';
import ReactDOM from 'react-dom';
import { UiModal, UiModal__Overlay,  CloseButton, ContainerModal, Paragraph,FilmCover } from './ModalStyles';

const portalRoot = document.getElementById('portal-root');


export default function Modal({item, isOpen, onClickClose}){

    if (!isOpen) return null;
    console.log(item)

    return ReactDOM.createPortal(
        
        <UiModal__Overlay>
            <UiModal>
                 <CloseButton type="button" onClick={onClickClose}>X</CloseButton>
                 <h2>{item.title}</h2>
                 <ContainerModal>                    
                    <Paragraph>{item.overview}</Paragraph>
                    <FilmCover src={item.poster_src}/>

                 </ContainerModal>
            </UiModal>            
        </UiModal__Overlay>,
        portalRoot
    )
}