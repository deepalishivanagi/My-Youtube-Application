import './Watchlater.css';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Watchlater(){

    const {ShowArray,DeletelFromWatchlater} =useContext(FilterContext);
    var WatchlaterList =[];

    for(let i=0;i<ShowArray.length;i++)
    {
        if(ShowArray[i].watchlater==1)
        {
            WatchlaterList.push(ShowArray[i]);
        }
    }

    return(
        <div className="Watchlater-main-container">
              <Sidebar/>
                <div>
                    <h1 id='watch-heading'>Videos added to watchlater</h1>
                        <div className="Watchlater-flex-container">    
                            {WatchlaterList.map((item)=>{ 
                                    return(
                                        <div>
                                            <Link to={`/VideoContainer/${item.id}`}>
                                                <div >
                                                    <img src={item.imgsrc} id="SingleVideo" ></img>    
                                                </div>                    
                                            </Link>
                                            <button onClick={()=>{DeletelFromWatchlater(item.id)}}>delete</button>
                                        </div>
                                    )})
                                 }
                        </div>
                </div>
                <ToastContainer />
        </div>
    );
}