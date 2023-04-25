import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorRoutePage from './routes/ErrorRoutePage';
import NbaTeamPage from './page/NbaTeamPage'
// import team from './page/NbaTeamPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoutePage />
  },
  {
    path: '/NbaTeamPage/:teamId',
    element: <NbaTeamPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
