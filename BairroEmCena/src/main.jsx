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
import Compra from './pages/Compra.jsx'
import Evento from './pages/Evento.jsx'
import CompraEvento from './pages/CompraEvento.jsx'

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
  },
  {
    path: '/comprar',
    element: <Compra/>
  },
  {
    path: 'evento',
    element: <Evento/>
  },
  {
    path: '/evento/comprar',
    element: <CompraEvento/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
