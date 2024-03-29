import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import './Liked.css';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import Card from './card.js';


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
                                                <Card item={item}/>                  
                                            </Link>
                                            <button id='liked-delete' onClick={()=>{DeletelikeHandler(item.id)}}>Delete</button>
                                        </div>
                                    )})
                                }
                        </div>
                </div>
                <ToastContainer />
        </div>
    );
}