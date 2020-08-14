import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

import movieList from './movie';
import numberResultsMovie from './movie/numberResultsMovie';
import series from './series/index'
import numberResultsSeries from './series/numberResultsSerie';


const rootReducer = combineReducers({
    movieList,
    numberResultsMovie,
    series,
    numberResultsSeries
});


export default createStore(rootReducer, compose(applyMiddleware(thunk)))