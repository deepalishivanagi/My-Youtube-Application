import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import './Liked.css';
import Sidebar from './Sidebar';


export default function Liked(){

    const {LikedList,DeletelikeHandler} =useContext(FilterContext)
    var ShowLikedVideos = [];

    for(let i=0;i<LikedList.length;i++)
    {
        if(LikedList[i].like==1)
        {
            ShowLikedVideos.push(LikedList[i]);
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