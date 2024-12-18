import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/common/card";
import Layout from './components/common/layout'
import Home from './components/common/card/home'
import About from './components/common/card/about'
import Registr from './components/common/card/register'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {    console.log("Use Effect!");}, []);
// console.log("Render component :)");

  return (
    <>
    {/* <Card/>
    <Layout/>
      <h1 className="text-center text-3xl font-bold underline"> 
         Hello world!
         </h1>
    </> */}
<Routes>
<Route path="/" element={<Layout />}>
  <Route path="Home"  element={<Home />} />
  <Route path="About"  element={<About />} />
  <Route path="Registr"  element={<Registr />} />

  {/* <Route path="about" element={<About />} />
  <Route path="dashboard" element={<Dashboard />} />

  
  <Route path="*" element={<NoMatch />} /> */}
</Route>
</Routes>
</>
  )
}

export default App
