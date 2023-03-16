import cat from './images/cyclokitty.jpeg';
import './App.css';

export default function Home() {
    console.log(process.env.REACT_APP_MY_SECRET)
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