import React from 'react';

import Movies from '../Movies/Movies';
import Series from '../Series/Series';


export default function All(){
    return(
        <>
            <Movies/>
            <hr/>
            <Series/>
        </>
    )
}