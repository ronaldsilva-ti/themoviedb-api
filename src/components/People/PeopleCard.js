import React from 'react';
import { useSelector } from 'react-redux';
import { 
    PeopleContainerCard,
    PeopleCardInfo,
    PeopleTitle,
    PeopleImage,
    PeopleDescription,
    
  } from './PeopleCardStyles';



export default function PeopleCard(){   
    
    const peoples = useSelector(state => state.peopleList)   

    return(       
          <>    
              {
                  peoples.map(people => (
                    <PeopleContainerCard key={people.id}>
                    <PeopleImage src={people.poster_src} />

                    <PeopleCardInfo>
                        <PeopleTitle>{people.name}</PeopleTitle>
                        <PeopleDescription>{people.overview}</PeopleDescription>
                    </PeopleCardInfo>
            
                </PeopleContainerCard>
                  ))
              }
                      
                       
                   

              
          </>
    )
}