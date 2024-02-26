import React from 'react';
import { Navigate } from 'react-router-dom';
import "./DonorLayout.css"
import { useUserStateContext } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';

const DonorLayout = () => {
  const { userToken } = useUserStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }
  if (userToken) {
    return <Navigate to="/" />
  }

  return (
    <>
        <Outlet />
    </>
  );
};

export default DonorLayout;
