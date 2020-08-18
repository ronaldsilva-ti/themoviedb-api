import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesCard from './MoviesCard';

import Modal from '../Modal/index';

export default function Movies(){  
    
    const movie = useSelector(state => state.movieList);
    const [item, setItem] = useState(null);

    return (
        <>
            {
                movie.map(item => (
                    <MoviesCard 
                        item={item}
                        onClickDetails={() => setItem(item)} 
                    />
                ))
            }

            <Modal 
                item={item} 
                isOpen={Boolean(item)} 
                onClickClose={() => setItem(null)}
            >               
            </Modal>

        </>
    )
}