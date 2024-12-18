import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/common/card";
import Layout from './components/common/layout';
import Home from './components/common/card/Home'


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
  {/* <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="dashboard" element={<Dashboard />} />

  
  <Route path="*" element={<NoMatch />} /> */}
</Route>
</Routes>
</>
  )
}

export default App
