import React from 'react';
import { parseISO, format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate,
    FavoriteButton,
    Container
  } from './MoviesCardStyles';

import { addFavorite } from '../../actions/Favorite';

export default function MoviesCard({ item, onClickDetails }){   

    const dispatch = useDispatch()

    const date = item.release_date;
    const parsedDate = parseISO(date);  

    const formattedDate = format(
        parsedDate, 
        " dd'/'MM'/'yyyy "
      );
    
    // console.log(formattedDate)
    
    return(       
          <>        
                <MoviesContainerCard key={item.id}>              
                    <MoviesImage src={item.poster_src} />
                    <MoviesCardInfo>
                            <Container>
                                <MoviesTitle onClick={onClickDetails}>{item.title}</MoviesTitle>                            
                                <FavoriteButton onClick={() => dispatch(addFavorite(item))} >Favoritar</FavoriteButton>
                            </Container>                            

                            <MoviesDate>{formattedDate}</MoviesDate>
                            <MoviesDescription>{item.overview}</MoviesDescription>
                                
                    </MoviesCardInfo>                              
                </MoviesContainerCard>                 
                
          </>
    )
}