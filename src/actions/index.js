import { GET_MOVIE, CLEAR, GET_NUMBER_RESULTS_MOVIE} from '../types';

export const listingMovie = (movies) => ({type: GET_MOVIE, payload: movies});
export const clearState = () => ({type:CLEAR});
export const getResultMovie = (number) => ({type:GET_NUMBER_RESULTS_MOVIE, payload:number});

