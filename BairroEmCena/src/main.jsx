import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Busca from './pages/Busca.jsx'
import Cartola from './pages/Cartola.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  {
    path: '/busca',
    element: <Busca/>
  },
  {
    path: '/cartola',
    element: <Cartola/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
