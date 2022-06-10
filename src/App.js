import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './pages/index';
import Create from './pages/create';
import View from './pages/view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='create' element={<Create/>} />
        <Route path='view/:Id' element={<View/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
