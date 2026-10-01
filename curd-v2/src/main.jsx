import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Launcher } from './Launcher.jsx'
import Parent from './Proppas/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Launcher />
    {/* <Parent/> */}
    </BrowserRouter>
  </StrictMode>,
)
