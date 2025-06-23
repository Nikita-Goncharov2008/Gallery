import './App.css';
import Home from './pages/Home';
import PhotoshopProjects from './pages/PhotoshopProjects';
import IllustratorProjects from './pages/IllustratorProjects';
import DetailedPic from './pages/detailedPic';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='photoshop' element={<PhotoshopProjects/>}/>
      <Route path='illustrator' element={<IllustratorProjects/>}/>
      <Route path='photoshop/:id' element = {<DetailedPic/>}/>
      <Route path='illustrator/:id' element = {<DetailedPic/>}/>
    </Routes>
  )


}

export default App;
