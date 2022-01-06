import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
   </>
  );
}

export default App;
