import React from 'react';
import { useSelector  } from 'react-redux';

import FavoriteCard from './FavoriteCard'

export default function Favorite(){

    const itemFavorite  = useSelector(state => state.favorite);

    return (
        <>
            {
                itemFavorite.map(item => (
                    <FavoriteCard item={item} />
                ))
            }

        </>
    )
}