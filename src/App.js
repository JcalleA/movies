import logo from './logo.svg';
import './App.css';
import Peliculas from "./modules/Peliculas/Peliculas";
import {Route, Routes} from "react-router-dom";
import PeliculaInfo from './modules/Peliculas/PeliculaInfo';
function App() {
  return (
    
    <div className="App">
      
      
        <Routes>
          <Route exact path='/' Component={Peliculas}/>
          <Route path='/Pelicula' Component={PeliculaInfo}/>
          </Routes>
      
    </div>
  );
}

export default App;
