import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/CarouselComponent'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'

function App() {
  
  const [books, setBooks] = useState([])
  const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'

  const topFive = () => {
    const booksObj = []
    for (let i = 0; i < 5; i++) {
      booksObj.push(books[i])
    }
    return booksObj
  }
  const newBooks = topFive()

  console.log(books)
  useEffect( () => {
    async function fetchData() {
      try {
        const response = await fetch(url) 
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json()
        setBooks(data.docs)
      } catch (error)  {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])
  
  return (
   <>
   <Outlet/>
   <Hero/>
   <Carousel books={newBooks}/>
   </>
  )
}

export default App
