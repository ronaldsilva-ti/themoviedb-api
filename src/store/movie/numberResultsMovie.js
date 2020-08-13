import { GET_NUMBER_RESULTS } from '../../types';


const INITIAL_STATE = 0;


export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){   
        case GET_NUMBER_RESULTS :
            return action.payload;       
        default:
            return state;
    }
}