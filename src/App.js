
import React from 'react';
import './App.css';
import Explore from './Explore';
import VideoContainer from './VideoContainer';
import { StaticDataArray } from './StaticDataArray';
import {Routes,Route,Link} from 'react-router-dom';
import MyChannel from './Images/MyChannel.png';
import Liked from './Liked';
import Watchlater from './Watchlater';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App">
     
      {/* <h1>Hello App</h1> */}
      <nav>
        <div><img src={MyChannel} id="logo"></img></div>
        <div><Link to="/Explore" id='explore'> Explore</Link></div>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path='/VideoContainer/:item_id' element={<VideoContainer/>} />  
        <Route path='/Liked' element={<Liked/>} /> 
        <Route path='/Watchlater' element={<Watchlater/>} /> 
        <Route path='/Playlist' element={<Playlist/>} /> 
      </Routes>
    </div>
  );
}

export default App;
