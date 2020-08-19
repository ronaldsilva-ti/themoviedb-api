import styled from 'styled-components';

export const Header = styled.nav`
    display:flex;
    align-items:center;
    height: 64px;
    margin:0;
    top:0;
    padding:0;
    left: 0;
    background-color:#032541;
`; 
export const Logo = styled.img`
    width: 154px;
    height: 20px;
    margin-left:50px;
`;
export const List = styled.ul`
    color:white;
    list-style:none;
    display:flex;    
    font-weight: 400;    
    justify-content:space-between;
`; 
export const ListItem = styled.li`
    margin-right: 15px;
    &:first-child{
        margin-left: 15px;
    }
`;

export const ListFavorite = styled.li`
   margin-left:640px;
   padding:15px;
   color:white;
   background-color:rgba(1,180,228);
   border:0;
   font-weight: 400;    
   cursor: pointer;
`;
  
    

