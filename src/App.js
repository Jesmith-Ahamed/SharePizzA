import React from 'react'
import"./css/main.css";
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import PickOfWeek from './components/PickOfWeek';
import Comments from './components/Comments';


const App = () => {
  return (
    <container>
    <AppBar/>
    <Banner/>
    <Menu/>
    <PickOfWeek/>
    <Comments/>
    <div className='text-center my-3 text-primary smaill'>Copyright 2024-2026 </div>
    </container>
  )
}

export default App
