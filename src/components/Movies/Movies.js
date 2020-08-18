import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesCard from './MoviesCard';

import Modal from '../Modal/index';

export default function Movies(){  
    
    const movie = useSelector(state => state.movieList);
    const [movieItem, setMovieItem] = useState(null);
    const [contentMovie, setContentMovie] = useState([])

    return (
        <>
            {
                movie.map(item => (
                    <MoviesCard 
                        item={item}
                        onClickDetails={() => setMovieItem(item.id)} 
                        setContentMovie={setContentMovie}                   
                    />
                ))
            }

            <Modal isOpen={Boolean(movieItem)} onClickClose={() => setMovieItem(null)}>
                <h1>Modal</h1>
            </Modal>

        </>
    )
}