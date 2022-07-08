import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import './Playlist.css';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
// import playlistTransp from './Images/playlistTransp.jpg';

export default function Playlist(){

    const{PlaylistObject,DeletePlaylistFile}=useContext(FilterContext);
    var PlaylistArray=Object.keys(PlaylistObject);


    return(
        <div className="Playlist-main-container">
             <Sidebar/>
             <div>
                    <h1 id='Playlist-heading'>Collection of Playlist</h1>
                        <div className="Playlist-flex-container">    
                            {PlaylistArray.map((item)=>{ 
                                    return(
                                        <div>
                                            <Link to={`/PlaylistFile/${item}`}>
                                                <div id='Playlist-div'>
                                                       
                                                </div>  
                                                <div id='Playlist-div-section'>
                                                   <h3>{item}</h3> 
                                                   <span>{PlaylistObject[item].length}</span>
                                                   {/* <img src={playlistTransp}></img> */}
                                                </div>                  
                                            </Link>
                                            <button onClick={()=>{DeletePlaylistFile(item)}}>delete</button>
                                        </div>
                                    )})
                                 }
                        </div>
                </div>
                <ToastContainer />
        </div>
    );
}