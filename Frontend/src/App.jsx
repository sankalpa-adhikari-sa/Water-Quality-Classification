import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './UI components/Navbar'
import Home from './Pages/Home/Home';
import Prediction from './Pages/Prediction/Prediction.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>  
        <Route exact path='/prediction' element={ <Prediction/> }/>  
      </Routes>
      
    </>
  )
}

export default App
