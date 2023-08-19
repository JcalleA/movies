
import './App.css';
import Peliculas from "./modules/Peliculas/Peliculas";
import {Route, Routes} from "react-router-dom";
import PeliculaInfo from './modules/Peliculas/PeliculaInfo';
function App() {
  return (
    
    <div className="App">
      
      
        <Routes>
          <Route exact path='/' element={<Peliculas/>}/>
          <Route path='/Pelicula' element={<PeliculaInfo/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
