import { ADD_HISTORIC } from '../../types';


const INITIAL_STATE = [{name:null,url:null}];

export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
            case ADD_HISTORIC:
                return  [...state,{
                    name:[action.name],
                    url:[ action.url]
                }]
        default:
            return state;
           
    }
}