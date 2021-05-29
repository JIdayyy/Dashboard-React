import React from 'react';
import Navbar from './Navbar/Navbar';

import DashboardPannel from './DashboardPannel/DashboardPannel';

export default function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center align-middle">
      <Navbar />
      <div className="w-4/5 h-3/4 border ">
        <DashboardPannel />
      </div>
    </div>
  );
}
