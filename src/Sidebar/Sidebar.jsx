import React from 'react';

export default function Sidebar() {
  return (
    <div className="h-full w-72 bg-black flex flex-col items-center justify-items-center align-middle">
      <ul className="flex w-full flex-col items-center align-middle justify-center">
        <li className="w-full cursor-pointer text-center items-center align-middle justify-center flex text-white h-12 border-b border-gray-500 bg-black opacity-50">
          <div className="w-1/3 flex items-center align-middle justify-center">
            <img className="w-9 mx-2" src="./src/img/home.png" alt="" />
          </div>
          <p className="w-2/4">DASHBOARD</p>
        </li>
        <li className="w-full cursor-pointer text-center items-center align-middle justify-center flex text-white h-12 border-b border-gray-500 bg-black opacity-50">
          <div className="w-1/3 flex items-center align-middle justify-center">
            <img className="w-9 mx-2" src="./src/img/account_circle.png" alt="" />
          </div>
          <p className="w-2/4">USERS</p>
        </li>
        <li className="w-full cursor-pointer text-center items-center align-middle justify-center flex text-white h-12 border-b border-gray-500 bg-black opacity-50">
          <div className="w-1/3 flex items-center align-middle justify-center">
            <img className="w-9 mx-2" src="./src/img/Vector.png" alt="" />
          </div>
          <p className="w-2/4">WEBSITE ADMIN</p>
        </li>
        <li className="w-full cursor-pointer text-center items-center align-middle justify-center flex text-white h-12 border-b border-gray-500 bg-black opacity-50">
          <div className="w-1/3 flex items-center align-middle justify-center">
            <img className="w-9 mx-2" src="./src/img/gavel.png" alt="" />
          </div>
          <p className="w-2/4">MODERATION</p>
        </li>
        <li className="w-full cursor-pointer text-center items-center align-middle justify-center flex text-white h-12 border-b border-gray-500 bg-black opacity-50">
          <div className="w-1/3 flex items-center align-middle justify-center">
            <img className="w-9 mx-2" src="./src/img/ic_baseline-query-stats.png" alt="" />
          </div>
          <p className="w-2/4">STATS</p>
        </li>
      </ul>
    </div>
  );
}
