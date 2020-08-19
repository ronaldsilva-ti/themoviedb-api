import { ADD_FAVORITE } from '../../types';


const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
            case ADD_FAVORITE:
                return [...state, action.payload]
        default:
            return state;
           
    }
}