import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

import movieList from './movie';
import numberResultsMovie from './movie/numberResultsMovie';
import seriesList from './series/index'
import numberResultsSeries from './series/numberResultsSerie';
import peopleList from './people/index';
import numberResultsPeople from './people/numberResultPeople';


const rootReducer = combineReducers({
    movieList,
    numberResultsMovie,
    seriesList,
    numberResultsSeries,
    peopleList,
    numberResultsPeople

});


export default createStore(rootReducer, compose(applyMiddleware(thunk)))