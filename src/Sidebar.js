import "./Sidebar.css";
import { Link } from "react-router-dom";


export default function Sidebar(){

    return(
        <div className="Sidebar-main-container">
            <Link to={`/Explore`}><div>Dashboard</div></Link>
            <Link to={`/Liked`}><div>Liked</div></Link>
            <Link to={`/Watchlater`}><div>Watch later</div></Link>
            <Link to={`/Playlist`}><div>Playist</div></Link>
        </div>
    )
}