import React, { useState } from 'react';
import './styles/App.css';
import { Outlet} from 'react-router-dom';
import Header from './components/Header';
import NavBarTop from './components/NavBarTop';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenu = () => {
    console.log('showMenu');
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <div className='app h-full w-full'>
      <Header name="Shivam Chaudhary" showMenu={showMenu}/>
      <div className='flex h-screen '>
        <NavBarTop mobileMenu={showMobileMenu}/>
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
