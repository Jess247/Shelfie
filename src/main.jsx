import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchPage from './pages/SearchPage'
import TbrPage from './pages/TbrPage'
import ReadPage from './pages/ReadPage'
import LoginPage from './pages/LoginPage'



import { BrowserRouter,Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/tbr' element={<TbrPage/>}/>
          <Route path='/read' element={<ReadPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>  
    </StrictMode>,
)
