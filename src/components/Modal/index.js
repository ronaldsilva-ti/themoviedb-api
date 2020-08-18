import React from 'react';
import ReactDOM from 'react-dom';
import { UiModal, UiModalOverlay,  CloseButton, ContainerModal, Paragraph,FilmCover } from './ModalStyles';

const portalRoot = document.getElementById('portal-root');


export default function Modal({item, isOpen, onClickClose}){

    

    if (!isOpen) return null;
    console.log(item.title)

    return ReactDOM.createPortal(
        
        <UiModalOverlay>
            <UiModal>
                 <CloseButton type="button" onClick={onClickClose}>X</CloseButton>
                 
                 <ContainerModal>   
                    <h2>{item.title}</h2>                 
                    <Paragraph>{item.overview}</Paragraph>
                    <FilmCover src={item.poster_src}/>
                 </ContainerModal>
            </UiModal>            
        </UiModalOverlay>,
        portalRoot
    )
}