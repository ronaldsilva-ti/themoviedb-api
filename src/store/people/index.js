import { GET_PEOPLE, CLEAR_PEOPLE } from '../../types';


const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){  
        case GET_PEOPLE:
            return [...state, action.payload]   
        case CLEAR_PEOPLE:   
            return state = INITIAL_STATE;
        default:
            return state;
    }
}