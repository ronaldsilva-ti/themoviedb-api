import styled from 'styled-components';

export const UiModal = styled.div`
    background-color:#ffff;
    border-radius: 4px;
    max-width:800px;
    margin: 80px auto 0 auto;
    padding:50px;
`
export const UiModal__Overlay = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(0,0,0,0.5);
`
export const CloseButton = styled.button`
    float:right;
    background:unset;
    border:1px solid black;
    border-radius:5px;
    width:25px;
    height:35px;
    cursor: pointer;    
`