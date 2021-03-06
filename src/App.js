import './App.css';
import NavBar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </>
  );
}

export default App;
