import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProject from './AppProject.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProject />
  </StrictMode>,
)
