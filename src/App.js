import React, { useState } from 'react';
import  Movies from './components/Movies/Movies';
import SearchResult from './components/SearchResult/SearchResult';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
    const [result,setResult] = useState([]);   

  return (  
    <div>
      <SearchBar setResult={setResult}/>
        
  <div className="App"  style={{display:'flex'}}>      
    <div className="Container">
        <SearchResult/>       
    </div>

    <div className="Movie" style={{maxWidth: 980, margin: '30px auto'}} >     
       <Movies result={result}/>      
     </div>
  </div>
  </div>
   
    
  )
}

export default App;
