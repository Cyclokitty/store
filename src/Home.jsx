import * as dotenv from 'dotenv';
dotenv.config();
import cat from './images/cyclokitty.jpeg';
import './App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cyclokitty</h1>
        <img className='App-logo' src={ cat } alt="Cat logo"/>
        <p>I am vengence!</p>
      </header>
    </div>
  );
}