import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import axios from 'axios';
import './index.css'
import App from './components/App/App.tsx'
import Ex from './components/exComponent/exComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Ex />
  </StrictMode>,
)
