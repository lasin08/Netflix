import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import urls, { actions, comedy, horror, originals } from './urls';

function App() {
  return (
    <div>
    <NavBar />
    <Banner />
    <RowPost url={originals} title="Netflix Originals" />
    <RowPost url={actions} title="Action" isSmall />
    <RowPost url={comedy} title="Comedy" isSmall />
    <RowPost url={horror} title="Horror" isSmall />
    </div>
  )
}

export default App;
