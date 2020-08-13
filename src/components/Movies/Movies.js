import React from 'react';
import MoviesCard from './MoviesCard';

// const Movie = {
//     imageMovie:'https://image.tmdb.org/t/p/w94_and_h141_bestv2/i4sxA9y1ZTnf2E8VGb4PHoK9UTL.jpg',
//     name: 'Batman: The Animated Series - The Legend Begins',
//     date: '23 de abril de 1992',
//     description:'Coletânea dos desenhos da série animada de Batman. Episódios: "Asas de couro", "Natal com o Coringa", "Nada a Temer", "A Última Gargalhada" e "Doce Veneno".'
// }

export default function Movies({result}){
    return <MoviesCard result={result} />
}