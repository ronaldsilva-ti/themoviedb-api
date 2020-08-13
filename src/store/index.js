import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

import movieList from './movie';
import numberResultsMovie from './movie/numberResultsMovie';



const rootReducer = combineReducers({
    movieList,
    numberResultsMovie
});


export default createStore(rootReducer, compose(applyMiddleware(thunk)))