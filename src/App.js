import './App.css';
import ItemInfo from './pages/ItemInfo';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5 text-center" >

      <Header></Header>
      <Routes>
        <Route path='/' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/addItem' element={<ItemInfo></ItemInfo>}></Route>

      </Routes>


    </div>
  );
}

export default App;
