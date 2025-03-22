import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/search' element={<App/>}/>
          <Route path='/tbr' element={<App/>}/>
          <Route path='/read' element={<App/>}/>
          <Route path='/login' element={<App/>}/>
        </Routes>
      </BrowserRouter>  
    </StrictMode>,
)
