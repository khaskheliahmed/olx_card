import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './compounts/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App/>
    

  </StrictMode>,
)
