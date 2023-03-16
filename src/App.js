import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cyclokitty from './Cyclokitty';
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
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
