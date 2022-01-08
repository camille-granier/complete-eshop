import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
   </>
  );
}

export default App;
