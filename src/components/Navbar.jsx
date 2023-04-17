import {  Link } from 'react-router-dom';
import { CartIcon } from '../images/icons';
import { useSelector } from 'react-redux';
import '../App.css';

export default function Navbar() {
  const { amount } = useSelector((state) => state.cart);
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
            <li>
              <Link to='/cart'><CartIcon/></Link>
              <div>
                <p>
                  {amount}
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
}