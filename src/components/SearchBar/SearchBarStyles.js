import styled from 'styled-components';

export const Search = styled.div`
    display: flex;
    /* justify-content: space-between; */
    position: relative;
    top: 0;
    left: 0;
    max-width: 1180px;
    width: 100vw;
    padding: 0 40px;
    border-bottom: 1px solid #C3c3c3;
`;

export const SearchIcon = styled.img``;
export const SearchIconClear = styled.img``;

export const SearchInput = styled.input`
    width:90%;
    border:0;
    padding:15px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size:15px;
    &:focus {
        outline: none;
    }    
`