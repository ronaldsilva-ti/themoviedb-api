import React from 'react';

import { Header, Logo, List, ListItem, ListFavorite } from './NavbarStyles';
import logo from '../../assets/img/themoviedb.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <Header>
                <NavLink  to={'/'} >
                    <Logo src={logo} alt="The Movie Database (TMDb)"/>
                </NavLink>
                    <List>
                        <NavLink to={'/filmes'} style={{ textDecoration: 'none', color:'white' }}>
                             <ListItem>Filmes</ListItem>
                        </NavLink>    
                        <NavLink to={'/series'} style={{ textDecoration: 'none', color:'white' }}>
                            <ListItem>Series</ListItem>
                        </NavLink>                    
                        
                        <NavLink to={'/people'} style={{ textDecoration: 'none', color:'white' }}>
                            <ListItem>Pessoas</ListItem>
                        </NavLink>
                       
                        <NavLink to={'/historic'} style={{ textDecoration: 'none', color:'white' }}>
                            <ListItem>Historico</ListItem>
                        </NavLink>
                        
                    </List>

                    <List>
                        <NavLink to={'/favorite'} style={{ textDecoration: 'none', color:'white' }}>
                            <ListFavorite>Favoritos</ListFavorite>
                        </NavLink>
                       
                    </List>
            </Header>
        </>
    )
   
}