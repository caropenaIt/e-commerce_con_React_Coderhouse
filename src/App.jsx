import { useState } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar/ >
        
        <ItemListContainer mensaje={"Bienvenidos al e-commerce"}/>
      </div>

    </>
  )
}

export default App
