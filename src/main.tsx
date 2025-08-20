import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <div className='w-5/10 h-5/10'>
        <Graphic />
    </div> */}
  </StrictMode>,
)
