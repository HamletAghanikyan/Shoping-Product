import './App.css';
import './assets/style/index.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ShopDetails } from './pages/Shop-Details';
import { ShopingCard } from './pages/Shoping-Card';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Checkout } from './pages/Checkout';

function App() {
  return <div>
    <Header/>
    <Routes>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/Shop'} element={<Shop/>}/>
      <Route path={'/shop-details'} element={<ShopDetails/>}/>
      <Route path={'/shoping-card'} element={<ShopingCard/>}/>
      <Route path={'/checkout'} element={<Checkout/>}/>
      <Route path={'/contact'} element={<Contact/>}/>
      <Route path={'/*'} element={<Navigate to={'/home'}/>}/>
    </Routes>
  </div>
}

export default App;
