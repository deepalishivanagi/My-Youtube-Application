import "./Sidebar.css";
import { Link } from "react-router-dom";


export default function Sidebar(){

    return(
        <div className="Sidebar-main-container">
            <ul class="nav-ul">
                <li><Link to={`/Explore`} class="links">Dashboard</Link></li>
                <li><Link to={`/Liked`} class="links">Liked</Link></li>
                <li><Link to={`/Watchlater`} class="links">Watchlater</Link></li>
                <li><Link to={`/Playlist`} class="links">Playlist</Link></li>
            </ul>   
        </div>
    )
}