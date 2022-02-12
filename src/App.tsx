import React from 'react';
import './App.css';
import { Outlet} from 'react-router-dom';
import Header from './components/Header';
import NavBarTop from './components/NavBarTop';

function App() {
  return (
    <div className='app h-screen'>
      <Header name="Shivam Chaudhary"/>
      <div className='flex h-full'>
        <NavBarTop />
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
