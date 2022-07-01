import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import './Playlist.css';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';

export default function Playist(){

    const{PlaylistObject,DeletePlaylistFile}=useContext(FilterContext);
    var PlaylistArray=Object.keys(PlaylistObject);

    return(
        <div className="Playlist-main-container">
             <Sidebar/>
             <div>
                    <h1 id='Playlist-heading'>Videos added to watchlater</h1>
                        <div className="Playlist-flex-container">    
                            {PlaylistArray.map((item)=>{ 
                                    return(
                                        <div>
                                            <Link to={`/PlaylistFile/${item}`}>
                                                <div >
                                                    <h1>{item}</h1>    
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