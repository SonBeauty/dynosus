import './App.css';
import Home from './pages/Home'
import Index2 from './pages/index-2'
import Index3 from './pages/index-3';
import { Routes, Route } from 'react-router-dom';
import Error from './pages/404';
import SingleVendor from './pages/shop/[id]';
import About from './pages/about';
import Services from './pages/services';
import Faqs from './pages/faqs';
import Shop from './pages/shop';
import Terms from './pages/terms';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/index-2' element={<Index2 />} />
      <Route path='/index-3' element={<Index3 />} />
      <Route path="/service" element= {<Services />} />
      <Route path='*' element={<Error />} />
      <Route path='/shop/:id' element={<SingleVendor />} />
      <Route path='/about' element={<About />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/terms' element={<Terms />} />
    </Routes>
  );
}

export default App;
