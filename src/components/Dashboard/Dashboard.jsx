/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import DashboardUsers from './DashboardUsers/DashboardUsers';

import DashboardPannel from './DashboardPannel/DashboardPannel';

export default function Dashboard({isDashboard, isDashboardUser}) {
  const [myDatas, setMyDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDatas = () => {
    setIsLoading(true);
    fetch('http://localhost:3001/api/hello', { method: 'GET' })
      .then((r) => r.json())
      .then((r) => setMyDatas(r))
      .then(() => setIsLoading(false));
  };

  useEffect(async () => {
    const datas = await fetch('http://localhost:3001/api/hello', { method: 'GET' });
    const dataResult = await datas.json();
    setIsLoading(false);
    setMyDatas(dataResult);
   
  }, []);

  return (
    <div className="w-full h-full flex  flex-col items-center justify-center align-middle">
      <div className="w-4/5 h-3/4 border ">
        {isDashboard &&  <DashboardPannel isLoading={isLoading} myDatas={myDatas} />}
        {isDashboardUser &&  <DashboardUsers isLoading={isLoading} getDatas={getDatas} myDatas={myDatas}/>}
      </div>
    </div>
  );
}
