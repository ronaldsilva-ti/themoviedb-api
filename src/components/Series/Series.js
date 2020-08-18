import React,{ useState } from 'react';
import SeriesCard from './SeriesCard';

import { useSelector } from 'react-redux';

import Modal from '../Modal/index';

export default function Series(){ 
    const serie = useSelector(state => state.seriesList);
    const [item, setItem] = useState(null);    
    return (
       <>
            {
                serie.map(item => (
                    <SeriesCard                  
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