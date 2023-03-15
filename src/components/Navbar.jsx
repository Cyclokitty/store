import {  Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
    return (
        <div className='header-container'>
        <div className='logo'>
          <a href='https://github.com/cyclokitty' target='_blank' rel='noreferrer'>Store</a>
        </div>
        <nav>
          <ul>
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
    )
}