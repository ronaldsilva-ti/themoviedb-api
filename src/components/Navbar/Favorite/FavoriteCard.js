import React from 'react';
// import { parseISO, format } from 'date-fns';

import { 
    FavoriteContainerCard,
    FavoriteCardInfo,
    FavoriteTitle,
    FavoriteImage,
    FavoriteDescription,
    FavoriteDate,
  } from './FavoriteStyles';

export default function FavoriteCard({ item,onClickDetails }){   

    // const date = item.release_date;
    // const parsedDate = parseISO(date);  

    // const formattedDate = format(
    //     parsedDate, 
    //     " dd'/'MM'/'yyyy "
    //   );
    
    // console.log(formattedDate)
    console.log(item)
    
    return(       
          <>        
                <FavoriteContainerCard key={item.id}>              
                    <FavoriteImage src={item.poster_src} />
                    <FavoriteCardInfo>
                            <FavoriteTitle onClick={onClickDetails}>{item.title}</FavoriteTitle>
                            <FavoriteDate>{item.release_date}</FavoriteDate>
                            <FavoriteDescription>{item.overview}</FavoriteDescription>
                    </FavoriteCardInfo>                
                </FavoriteContainerCard>                 
                
          </>
    )
}