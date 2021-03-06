import React from 'react';

export default function Navbar() {
  return (
<div className="w-full">
<ul className="border flex justify-around align-middle items-center w-full h-14">
      <button className="border h-full text-gray-400 font-bold cursor-pointer w-full flex items-center justify-center align-middle">DASHBOARD</button>
      <button className="border h-full text-gray-400 font-bold cursor-pointer w-full flex items-center justify-center align-middle">
        NOTIFICATIONS
      </button>
      <button className="border h-full text-gray-400 font-bold cursor-pointer w-full flex items-center justify-center align-middle">HOUSE</button>
      <button className="border h-full text-gray-400 font-bold cursor-pointer w-full flex items-center justify-center align-middle">SURFCAMP</button>
    </ul>
</div>
  );
}
