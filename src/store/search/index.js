import { GET_HISTORY } from '../../types';


const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){  
        case GET_HISTORY:
            return [...state, action.payload]           
        default:
            return state;
    }
}