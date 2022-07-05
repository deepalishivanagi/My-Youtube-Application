
import React from 'react';
import './App.css';
import Explore from './Explore';
import VideoContainer from './VideoContainer';
import {Routes,Route,Link} from 'react-router-dom';
import MyChannel from './Images/MyChannel.png';
import Liked from './Liked';
import Watchlater from './Watchlater';
import Playlist from './Playlist';
import PlaylistFile from './PlaylistFile';

function App() {

  return (
    <div className="App">
      <nav>
        {/* <div><img src={MyChannel} id="logo"></img></div> */}
        <div><span id="dark">Video </span><span  id="light"> PlayBook</span></div>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path='/VideoContainer/:item_id' element={<VideoContainer/>} />  
        <Route path='/Liked' element={<Liked/>} /> 
        <Route path='/Watchlater' element={<Watchlater/>} /> 
        <Route path='/Playlist' element={<Playlist/>} /> 
        <Route path='/PlaylistFile/:file' element={<PlaylistFile/>}/>
        <Route path="*" element={<Explore/>}/>
      </Routes>
    </div>
  );
}

export default App;
