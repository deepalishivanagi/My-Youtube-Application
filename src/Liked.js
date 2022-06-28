import './Liked.css';
import Sidebar from './Sidebar';


export default function Liked(){

    return(
        <div className="Liked-main-container">
            <Sidebar/>
                <div className="Liked-flex-container">
                    <h1>inside liked component</h1>
                </div>
        </div>
    );
}