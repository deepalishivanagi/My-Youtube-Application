import { Link } from "react-router-dom";
import { StaticDataArray } from "./StaticDataArray";
import './Explore.css';
import Sidebar from "./Sidebar";

export default function Explore(){

    return(
        <div className="Explore-main-container">
             <Sidebar/>
                <div className="Explore-flex-container">
                    {StaticDataArray.map((item)=>{ 
                            return(
                                <Link to={`/VideoContainer/${item.id}`}>
                                    <div >
                                        <img src={item.imgsrc} id="SingleVideo" ></img>
                                    </div>                    
                                </Link>
                            )})
                        }
                </div>
        </div>
    );
}