import './App.css';
import Home from './pages/Home';
import PhotoshopProjects from './pages/PhotoshopProjects';
import IllustratorProjects from './pages/IllustratorProjects';
import DetailedPic from './pages/detailedPic';
import { Route, Routes } from 'react-router-dom';
import data from './assets/data';
function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='photoshop' element={<PhotoshopProjects data={data.photoshop} />}/>
      <Route path='illustrator' element={<IllustratorProjects data={data.illustrator}/>}/>
      <Route path='photoshop/:id' element = {<DetailedPic data={data.photoshop}/>}/>
      <Route path='illustrator/:id' element = {<DetailedPic data={data.illustrator}/>}/>
    </Routes>
  )


}

export default App;
