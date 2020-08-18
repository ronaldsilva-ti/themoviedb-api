import styled from 'styled-components';

export const SeriesContainerCard = styled.div`  
    border-radius: 8px;
    border: 1px solid #C3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.15);
    display:flex;
    box-sizing: border-box;
    margin-bottom:25px;
    margin-top:30px;
`;
export const SeriesCardInfo = styled.div`
    padding:10px;
    box-sizing: border-box;
`;
export const SeriesTitle = styled.button`
    font-size: 1.2em;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color:unset;
    border:unset;
    cursor: pointer;
`;
export const SeriesImage = styled.img`
    min-width: 94px;
    width: 94px;
    height: 141px;
    border: 1px solid;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;
export const SeriesDate = styled.span`
    margin-top:0;
    color: #999;
`;
export const SeriesDescription = styled.p`
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    margin-top:28px;
`;
