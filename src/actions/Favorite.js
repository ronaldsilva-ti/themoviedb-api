import { ADD_FAVORITE } from '../types';


export const addFavorite = (item) => ({ type:ADD_FAVORITE, payload:item })