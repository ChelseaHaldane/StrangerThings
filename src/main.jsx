import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import AllRoutes from './components/Routes'
import logo from './img/logo.svg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
