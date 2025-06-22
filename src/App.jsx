import './App.css';
import Home from './pages/Home';
import PhotoshopProjects from './pages/PhotoshopProjects';
import IllustratorProjects from './pages/IllustratorProjects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='photoshop' element={<PhotoshopProjects/>}/>
      <Route path='illustrator' element={<IllustratorProjects/>}/>

    </Routes>
  )


}

export default App;
