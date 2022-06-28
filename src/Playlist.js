import './Playlist.css';
import Sidebar from './Sidebar';

export default function Playist(){

    return(
        <div className="Playlist-main-container">
             <Sidebar/>
                <div className="Playlist-flex-container">
                     <h1>inside Playist component</h1>
                </div>
        </div>
    );
}