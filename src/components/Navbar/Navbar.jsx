import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full h-24  bg-blue-700 flex items-center justify-between align-middle">
      <div className="h-full mx-6 flex items-center align-middle justify-items-center">
        <img className="w-24" src="./src/img/Admin.png" alt="" />
        <img className="w-24 transform translate-y-2" src="./src/img/SurfCamp.png" alt="" />
      </div>
      <img className="w-20" src="./src/img/settings_power.png" alt="" />
    </div>
  );
}
