import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'

function App() {
  
  const [books, setBooks] = useState([])
  const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'

  // console.log(books)
  // useEffect( () => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url) 
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`)
  //       }
  //       const data = await response.json()
  //       setBooks(data.docs)
  //     } catch (error)  {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])
  
  return (
   <>
   <Outlet/>
   <Hero/>
   </>
  )
}

export default App
