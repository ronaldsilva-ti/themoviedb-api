import React from 'react';
import {  Switch, Route } from 'react-router-dom';

//Pages 
import All from '../components/All/All';
import Movies from '../components/Movies/Movies';
import Series from '../components/Series/Series';
import People from '../components/People/People';
import Historic from '../components/Historic/Historic';



export default function RouterPages(){
    return(
            <Switch>
                <Route  path="/" exact component={ All } />
                <Route  path="/filmes" exact component={ Movies } />
                <Route  path="/series" exact component={ Series } />
                <Route  path="/people" exact component={ People } />
                <Route  path="/historic" exact component={ Historic } />

            </Switch>
    )
}