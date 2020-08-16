import styled from 'styled-components';

export const SearchCard = styled.div`
    border-radius: 8px;
    border: 1px solid #C3c3c3;
    box-sizing: border-box;   
    margin-top:30px;
    margin-left:10px;
    margin-right:20px;
    
`
export const SearchTitle = styled.h3`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px solid #C3c3c3;
    background-color: rgba(1,180,228);
    font-weight: 600;
    margin: 0;
    padding: 25px;
    width:200px;
    color: white;
    `
export const SearchList = styled.ul`
    list-style:none;
    padding:0;    

`
export const SearchListItem = styled.li`
     margin:10px;
     display:flex;
     justify-content:space-between;
     
`
export const NumberResult = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 0.8em;
    font-weight: 300;
    padding: 0px 10px;
    background: rgba(0,0,0,0.08);
    border-radius: 8px;
    color:#000;



`


