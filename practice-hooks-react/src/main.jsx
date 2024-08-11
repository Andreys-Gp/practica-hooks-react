import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { Hooks } from './app/Hooks'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Hooks/>
  </StrictMode>,
)
