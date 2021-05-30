import React,{useState} from 'react';
import '../../src/App.css';

import Dashboard from '../components/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { RecoilRoot } from 'recoil';

function App() {
  
  const [isDashboard,setIsDashboard] = useState(false)
  const [isDashboardUser,setIsDashboardUser] = useState(true)
  return (
    <RecoilRoot>
      <div className="w-screen flex flex-col h-screen">
        <Navbar />
        <div className="h-full flex">
          <Sidebar setIsDashboard={setIsDashboard} setIsDashboardUser={setIsDashboardUser} />
          <Dashboard isDashboard={isDashboard} isDashboardUser={isDashboardUser}/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
