import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './Context/ContextProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
>>>>>>> 3cb87e14dd96f43264a3f7aae8851655d1d6109e
);

