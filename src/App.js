import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <nav>
          <ul id='navigation'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about'
          element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
