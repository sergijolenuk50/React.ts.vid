import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/common/card";


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {    console.log("Use Effect!");}, []);
console.log("Render component :)");

  return (
    <>
    <Card/>
      <h1 className="text-center text-3xl font-bold underline"> 
         Hello world!
         </h1>
    </>
  )
}

export default App
