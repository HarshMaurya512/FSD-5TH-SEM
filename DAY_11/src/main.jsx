import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Imageslider from './Imageslider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Imageslider/>
  </StrictMode>,
)
