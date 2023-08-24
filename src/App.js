import Home from './Home';
import About from './About';
import Contact from './Contact';
import CustomerPage from './CustomerPage';
import Cyclokitty from './Cyclokitty';
import TagPage from './TagPage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import ThankYouPage from './ThankYouPage';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <TextBar text='Come back for new items!' />
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/cyclokitty' element={<Cyclokitty/>}/>
        <Route path='/3D' element={<TagPage/>} />
          <Route path='/3D/:item' element={<ItemPage/>}/>
        <Route path='/build' element={<TagPage/>} />
          <Route path='/build/:item' element={<ItemPage/>}/>
        <Route path='/friends' element={<TagPage/>} />
          <Route path='/friends/:item' element={<ItemPage/>}/>
        <Route path='/gifts' element={<TagPage/>} />
          <Route path='/gifts/:item' element={<ItemPage/>}/>
        <Route path='/shapes' element={<TagPage/>} />
         <Route path='/shapes/:item' element={<ItemPage/>}/>
        <Route path='/shiny' element={<TagPage/>} />
          <Route path='/shiny/:item' element={<ItemPage/>}/>
        <Route path='/soft' element={<TagPage/>} />
          <Route path='/soft/:item' element={<ItemPage/>}/>
        <Route path='/tough' element={<TagPage/>} />
          <Route path='/tough/:item' element={<ItemPage/>}/>
        <Route path='/customer' element={<CustomerPage/>} /> 
      {/* <Route path='/customer' element={<CustomerForm/>} /> */}
        <Route path='/thankyou' element={<ThankYouPage/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
