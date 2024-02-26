import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Homepage from './Pages/Homepage/Homepage';
import DonorHomepage from './Pages/Donor/DonorHomepage';



function App() {
  return (


    <Routes>

               {/* Public Route */}
      <Route path='/GuestPage' element={<Homepage />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Registration' element={<Registration/>} />


                {/* Protected Routes */}
      <Route path='/' element={<DonorHomepage/>} />



    </Routes>
  );
}

export default App;
