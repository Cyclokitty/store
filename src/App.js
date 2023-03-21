import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cyclokitty from './Cyclokitty';
import TagPage from './TagPage';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <TextBar text='Come back for new items!' />
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about'
          element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cyclokitty' element={<Cyclokitty/>}/>
        <Route path='/3D' element={<TagPage/>} />
        <Route path='/build' element={<TagPage/>} />
        <Route path='/friends' element={<TagPage/>} />
        <Route path='/gifts' element={<TagPage/>} />
        <Route path='/shapes' element={<TagPage/>} />
        <Route path='/shiny' element={<TagPage/>} />
        <Route path='/soft' element={<TagPage/>} />
        <Route path='/tough' element={<TagPage/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
