import React from 'react';
import '../../src/App.css';

import Dashboard from '../components/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="w-screen flex flex-col h-screen">
        <Navbar />
        <div className="h-full flex">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
