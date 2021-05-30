import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar'

export default function DashboardPannel({ myDatas, isLoading }) {
  return (
   <div className="w-full h-full flex items-center align-middle  flex-col">
       <Navbar />
   </div>
  );
}

DashboardPannel.propTypes = {
  myDatas: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
