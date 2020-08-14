import { GET_SERIE, CLEAR_SERIE } from '../../types';


const INITIAL_STATE = [
   
]

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){  
        case GET_SERIE:
            return [...state, action.payload]   
        case CLEAR_SERIE:   
            return state = INITIAL_STATE;
        default:
            return state;
    }
}