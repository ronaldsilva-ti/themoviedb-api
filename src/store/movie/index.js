import { GET_MOVIE, CLEAR } from '../../types';


const INITIAL_STATE = [
]

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){  
        case GET_MOVIE:
            return [...state, action.payload]   
        case CLEAR:   
            return state = INITIAL_STATE;
        default:
            return state;
    }
}