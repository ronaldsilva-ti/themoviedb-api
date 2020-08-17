import React from 'react';
import { useSelector  } from 'react-redux';

import Movies from '../Movies/Movies';
import Series from '../Series/Series';
import People from '../People/People';


export default function All(){

    const history = useSelector(state => state.history)  
    console.log(history) 

    return(
        <>
            <Movies/>
            <Series/>
            <People/>
        </>
    )
}