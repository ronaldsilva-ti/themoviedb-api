import React from 'react';

import { Header, Logo, List, ListItem, ListFavorite } from './NavbarStyles';
import logo from '../../assets/img/themoviedb.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <Header>
                <Logo src={logo} alt="The Movie Database (TMDb)"/>
                    <List>
                        <ListItem>Filmes</ListItem>
                        <ListItem>Series</ListItem>
                        <ListItem>Pessoas</ListItem>
                        <NavLink to={'/historic'} style={{ textDecoration: 'none', color:'white' }}>
                            <ListItem>Historico</ListItem>
                        </NavLink>
                        
                    </List>

                    <List>
                        <ListFavorite>Favoritos</ListFavorite>
                    </List>
            </Header>
        </>
    )
   
}