import { Link } from "react-router-dom";
import './Explore.css';
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { FilterContext } from "./FilterProvider";
import Card from "./card";

export default function Explore(){

    const {ShowArray} =useContext(FilterContext)

    return(
        <div className="Explore-main-container">
             <Sidebar/>
                <div className="Explore-flex-container">
                    {ShowArray.map((item)=>{ 
                            return(
                                <Link to={`/VideoContainer/${item.id}`}>
                                    <Card item={item}/>                 
                                </Link>
                            )})
                        }
                </div>
        </div>
    );
}