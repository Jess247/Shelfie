import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [books, setBooks] = useState([])
  const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'

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
    </>
  )
}

export default App
