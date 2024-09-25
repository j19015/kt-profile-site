import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Contact,Skill,Top,Portfolio } from './pages';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './components/layouts/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Top /></Layout>,
  },
  {
    path: "/skill",
    element: <Layout><Skill /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/portfolio",
    element: <Layout><Portfolio /></Layout>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
