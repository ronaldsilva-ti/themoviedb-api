import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { SeriesActions }  from '../../actions/SeriesActions';
import { PeopleActions } from '../../actions/PeopleActions';
import { MoviesActions } from '../../actions/MovieAction';

export default  function Historic(){

    const dispatch = useDispatch()
    const [ search, setSearch ] = useState([]); 

    const itens = useSelector(state => state.history)  
    
    useEffect(() => {
        setSearch(itens)
    },[itens])

        
  function LinkItem(){
    dispatch(SeriesActions(search))
    dispatch(PeopleActions(search))
    dispatch(MoviesActions(search))

  }
    
    return(
        <>
            <Title>Historico</Title>
            <List>
                {
                    search.map(item => (
                        <ListItem>
                            <button onClick={LinkItem}>{item}</button>
                        </ListItem>
                    ))
                }
              
            </List>
        </>
    )
}


const Title = styled.h1``
const List = styled.ul`
    list-style:none;
    color: rgba(1,180,228);
    margin-top:5px;
    font-size:1.5rem;
`
const ListItem = styled.li``

const Button = styled.button``
