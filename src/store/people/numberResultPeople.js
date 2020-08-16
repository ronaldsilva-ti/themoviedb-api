import { GET_NUMBER_RESULTS_PEOPLE } from '../../types';


const INITIAL_STATE = 0;


export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){   
        case GET_NUMBER_RESULTS_PEOPLE :
            return action.payload;       
        default:
            return state;
    }
}