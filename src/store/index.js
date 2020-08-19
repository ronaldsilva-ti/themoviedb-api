import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

import movieList from './movie';
import seriesList from './series/index'
import peopleList from './people/index';
import numberResultsPeople from './people/numberResultPeople';
import numberResultsMovie from './movie/numberResultsMovie';
import numberResultsSeries from './series/numberResultsSerie';
import history from './search/index';
import favorite from './favorite/index';
import historic from './historic/index';


const rootReducer = combineReducers({
    movieList,
    numberResultsMovie,
    seriesList,
    numberResultsSeries,
    peopleList,
    numberResultsPeople,
    history,
    favorite,
    historic
});


export default createStore(rootReducer, compose(applyMiddleware(thunk)))