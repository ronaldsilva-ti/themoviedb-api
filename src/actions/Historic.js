import { ADD_HISTORIC } from '../types';


export const addHistoric = (url,name) => ({ type:ADD_HISTORIC, url:url, name:name })