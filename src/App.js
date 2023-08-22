
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './modules/Header/Header';
import Genres from './views/Genres'
import Home from './views/Home';
import Info from './views/Info/Info';
function App() {
  return (
    
    <div className="App">
      
      <Header></Header>
      
        <Routes>
          <Route exact path='/' element ={<Home/>}/>
          <Route path='/info/:id' element ={<Info/>}/>
          <Route path='/genres/:name/:id' element ={<Genres/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
