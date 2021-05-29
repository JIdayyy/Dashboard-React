import React, { useEffect, useState } from 'react';

export default function DashboardPannel() {
  const [myDatas, setMyDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const datas = await fetch('http://localhost:3001/api/hello', { method: 'GET' });
    const dataResult = await datas.json();
    setIsLoading(false);
    setMyDatas(dataResult);
  }, []);

  return (
    <div className="w-full h-full flex flex-col  overflow-y-auto align-middle">
      <ul className="w-full h-20 border-b">
        {!isLoading &&
          myDatas.map((item, index) => {
            return (
              <li className="flex w-full items-center justify-between align-middle" key={index}>
                <div>{item.first_name}</div> - <div>{item.last_name}</div> - <div>{item.email}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
