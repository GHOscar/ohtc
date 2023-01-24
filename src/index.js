import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/Contact/ContactPage';
import TrailerPage from './components/Trailers/TrailerPage';

const landingPage = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/kontakt",
    element: <ContactPage />,
  },
  {
    path: "/slapvagnar",
    element: <TrailerPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={landingPage} />
  </React.StrictMode>
);
