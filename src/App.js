import React from 'react';
import  Movies from './components/Movies/Movies';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (           
    <div style={{display:'flex'}}>
        <SearchResult/>     
      <div className="Container" style={{maxWidth: 980, margin: '30px auto'}} >     
        <Movies/>
        <Movies/>
        <Movies/>
      </div>
    </div>
   
    
  )
}

export default App;
