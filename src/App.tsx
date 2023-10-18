import './App.css';
import Index3 from './pages/index-3';
import Home from './pages/Home'
import Index2 from './pages/index-2'
import { Routes, Route } from 'react-router-dom';
import Index4 from './pages/index-4';
import Index5 from './pages/index-5';
import Index6 from './pages/index-6';
import Index7 from './pages/index-7';
import Index8 from './pages/index-8';
import Blog1 from './pages/Blog-1';
import Blog2 from './pages/Blog-2';
import Error from './pages/404';
import SingleVendor from './pages/shop/[id]';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/index-2' element={<Index2 />} />
      <Route path='/index-3' element={<Index3 />} />
      <Route path='/index-4' element={<Index4 />} />
      <Route path='/index-5' element={<Index5 />} />
      <Route path='/index-6' element={<Index6 />} />
      <Route path='/index-7' element={<Index7 />} />
      <Route path='/index-8' element={<Index8 />} />
      <Route path='/blog-1' element={<Blog1 />} />
      <Route path='/blog-2' element={<Blog2 />} />
      <Route path='*' element={<Error />} />
      <Route path='/shop/:id' element={<SingleVendor />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
