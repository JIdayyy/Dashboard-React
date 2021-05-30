import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';

export default function DashboardUsers({ myDatas, isLoading,getDatas }) {
  const [onSelect, setOnSelect] = useState('');







  const handleDelete = async () => {
    await fetch(`http://localhost:3001/api/users/${onSelect}`, { method: 'DELETE' }).then(() => getDatas()).then(()=>  setOnSelect(myDatas[0].id));
  };
    return(
        <div className="w-full h-full flex items-center align-middle justify-center flex-col">

<div className="flex items-center align-middle justify-center my-9">
        <select className="border px-4 py-2" onChange={(e) => setOnSelect(e.target.value)} name="" id="">
          {!isLoading &&
            myDatas.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.email}
                </option>
              );
            })}
        </select>
      <button className="border bg-red-700 text-white rounded-md mx-5 py-2 px-4" onClick={handleDelete}>DELETE</button>
      </div>


          




          
        <div className="flex w-11/12  border-b h-20 items-center justify-between align-middle font-bold"><div className="w-1/3">ID</div>  <div className="w-1/3">PASSWORD</div>  <div className="w-1/3">EMAIL</div></div>
      <div className="w-full h-full relative flex flex-col items-center   overflow-y-auto align-middle">
      <ul className="w-11/12 relative h-full ">
        {!isLoading ? (
          myDatas.map((item, index) => {
            return (
              <li className="flex w-full border-b h-20 items-center justify-between align-middle" key={index}>
                <div className="w-1/3">{item.id}</div>  <div className="w-1/3">{item.password}</div>  <div className="w-1/3">{item.email}</div>
              </li>
            );
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center align-middle">
            <img alt="test" src="./src/img/giphy.gif"></img>
          </div>
        )}
      </ul>
    </div>
   </div>
    )
};
DashboardUsers.propTypes = {
    myDatas: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };