/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';

import DashboardPannel from './DashboardPannel/DashboardPannel';

export default function Dashboard() {
  const [myDatas, setMyDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onSelect, setOnSelect] = useState('');

  const getDatas = () => {
    setIsLoading(true);
    fetch('http://localhost:3001/api/hello', { method: 'GET' })
      .then((r) => r.json())
      .then((r) => setMyDatas(r))
      .then(() => setIsLoading(false));
    setOnSelect(myDatas[0].id);
  };

  useEffect(async () => {
    const datas = await fetch('http://localhost:3001/api/hello', { method: 'GET' });
    const dataResult = await datas.json();
    setIsLoading(false);
    setMyDatas(dataResult);
    setOnSelect(dataResult[0].id);
  }, []);

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/api/users/${onSelect}`, { method: 'DELETE' }).then(() => getDatas());
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center align-middle">
      <div>
        <select onChange={(e) => setOnSelect(e.target.value)} name="" id="">
          {!isLoading &&
            myDatas.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.email}
                </option>
              );
            })}
        </select>
      </div>
      <button onClick={handleDelete}>DELETE</button>
      <Navbar />
      <div className="w-4/5 h-3/4 border ">
        <DashboardPannel isLoading={isLoading} myDatas={myDatas} />
      </div>
    </div>
  );
}
