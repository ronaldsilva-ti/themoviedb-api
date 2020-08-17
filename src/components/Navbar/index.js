import React from 'react';

import { Header, Logo, List, ListItem, ListFavorite, ListContainer } from './NavbarStyles';
import logo from '../../assets/img/themoviedb.svg';

export default function Navbar(){
    return(
        <>
            <Header>
                <Logo src={logo} alt="The Movie Database (TMDb)"/>
                    <List>
                        <ListItem>Filmes</ListItem>
                        <ListItem>Series</ListItem>
                        <ListItem>Pessoas</ListItem>
                        <ListItem>Historico</ListItem>
                    </List>

                    <List>
                        <ListFavorite>Favoritos</ListFavorite>
                    </List>
            </Header>
        </>
    )
   
}