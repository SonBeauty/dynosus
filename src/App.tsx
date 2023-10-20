import './App.css';
import Home from './pages/Home'
import Index2 from './pages/index-2'
import { Routes, Route } from 'react-router-dom';
import Error from './pages/404';
import SingleVendor from './pages/shop/[id]';
import About from './pages/about';
import Services from './pages/services';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/index-2' element={<Index2 />} />
      <Route path="/service" element= {<Services />} />
      <Route path='*' element={<Error />} />
      <Route path='/shop/:id' element={<SingleVendor />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
