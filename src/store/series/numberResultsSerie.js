import { GET_NUMBER_RESULTS_SERIE } from '../../types';


const INITIAL_STATE = 0;


export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){   
        case GET_NUMBER_RESULTS_SERIE :
            return action.payload;       
        default:
            return state;
    }
}