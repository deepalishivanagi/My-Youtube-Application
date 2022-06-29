import { Link } from "react-router-dom";
import './Explore.css';
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { FilterContext } from "./FilterProvider";

export default function Explore(){

    const {ShowArray} =useContext(FilterContext)

    return(
        <div className="Explore-main-container">
             <Sidebar/>
                <div className="Explore-flex-container">
                    {ShowArray.map((item)=>{ 
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