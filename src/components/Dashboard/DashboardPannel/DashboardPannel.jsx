import React from 'react';
import PropTypes from 'prop-types';

export default function DashboardPannel({ myDatas, isLoading }) {
  return (
    <div className="w-full h-full flex flex-col items-center   overflow-y-auto align-middle">
      <ul className="w-11/12 h-full ">
        {!isLoading ? (
          myDatas.map((item, index) => {
            return (
              <li className="flex w-full border-b h-20 items-center justify-between align-middle" key={index}>
                <div>{item.id}</div> - <div>{item.password}</div> - <div>{item.email}</div>
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
  );
}

DashboardPannel.propTypes = {
  myDatas: PropTypes.array.isRequired,
  isLoading: PropTypes.func.isRequired,
};
