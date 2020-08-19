import React, { useState }  from 'react';
import { useSelector  } from 'react-redux';

import FavoriteCard from './FavoriteCard';
import Modal from '../../Modal/index';


export default function Favorite(){

    const itemFavorite  = useSelector(state => state.favorite);
    const [item, setItem] = useState(null);
    return (
        <>
            {
                itemFavorite.map(item => (
                    <FavoriteCard 
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