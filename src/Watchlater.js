import './Watchlater.css';
import Sidebar from './Sidebar';

export default function Watchlater(){

    return(
        <div className="Watchlater-main-container">
              <Sidebar/>
                <div className="Watchlater-flex-container">
                     <h1>inside Watchlater component</h1>
                </div>
        </div>
    );
}