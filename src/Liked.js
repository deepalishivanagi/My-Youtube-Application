import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import './Liked.css';
import Sidebar from './Sidebar';


export default function Liked(){

    const {ShowArray,DeletelikeHandler} =useContext(FilterContext)
    var ShowLikedVideos = [];

    for(let i=0;i<ShowArray.length;i++)
    {
        if(ShowArray[i].like==1)
        {
            ShowLikedVideos.push(ShowArray[i]);
        }
    }
   

    return(
        <div className="Liked-main-container">
            <Sidebar/>
                <div>
                     <h1 id='like-heading'>List of liked videos</h1>
                        <div className="Liked-flex-container">    
                            {ShowLikedVideos.map((item)=>{ 
                                    return(
                                        <div>
                                            <Link to={`/VideoContainer/${item.id}`}>
                                                <div >
                                                    <img src={item.imgsrc} id="SingleVideo" ></img>    
                                                </div>                    
                                            </Link>
                                            <button onClick={()=>{DeletelikeHandler(item.id)}}>delete</button>
                                        </div>
                                    )})
                                }
                        </div>
                </div>
        </div>
    );
}