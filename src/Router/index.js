import React from 'react';
import {  Switch, Route } from 'react-router-dom';

//Pages 
import All from '../components/All/All';
import Movies from '../components/Movies/Movies';
import Series from '../components/Series/Series';
import People from '../components/People/People';



export default function RouterPages(){
    return(
            <Switch>
                <Route  path="/" exact component={ All } />
                <Route  path="/filmes" exact component={ Movies } />
                <Route  path="/series" exact component={ Series } />
                <Route  path="/pessoas" exact component={ People } />
            </Switch>
    )
}