import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'


const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      },
      {
        path:'/projects',
        element:<Projects />
      }
  ]
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
