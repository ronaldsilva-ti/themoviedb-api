import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'



const Title = styled.h1``
const List = styled.p`
  margin-top:10px;
  color:#01B4E4;
`
const Container = styled.div`
  margin-top:20px;
`


export default function Historic(){

    const history = useSelector(state => state.historic);
    return(
      <Container>
        <Title>Historico</Title>
        {
          history.map(item => (
           <List>{item.name}</List>
          ))
        }
            
      </Container>
    )
}