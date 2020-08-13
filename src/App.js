import React from 'react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {   
  return(
    <Provider store={store}>
       <Home/>
    </Provider>
  )
}

export default App;
