import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css';

// Router
import AppRouter from '@routes/App.routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
