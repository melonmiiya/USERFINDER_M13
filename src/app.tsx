import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;