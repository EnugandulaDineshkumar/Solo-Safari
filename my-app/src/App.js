import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import InstructionsCarousel from "./component/Instructions/InstructionsCarousel"
import Home from './component/Home/Home';
import TravelDiaries from './component/TravelDiaries/TravelDiaries';
import Inspired from './component/Inspired/Inspired'
import PlanYourTrip from "./component/PlanYourTrip/PlanYourTrip"


import './App.css';
const App = () => {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/planyourtrip' element={<PlanYourTrip />} />
      <Route path='/instructions' element={<InstructionsCarousel />} />
      
      <Route path='/traveldiaries' element={<TravelDiaries />} />
      <Route path='/inspired' element={<Inspired />} />
      
    </Routes>
   </>
   
  )
}

export default App