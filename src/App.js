import './App.css';
import ItemInfo from './pages/ItemInfo';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import CreatedItem from './pages/CreatedItem';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5 text-center" >

      <Header></Header>
      <Routes>
        <Route path='/' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/listItem' element={<CreatedItem></CreatedItem>}></Route>

      </Routes>


    </div>
  );
}

export default App;
