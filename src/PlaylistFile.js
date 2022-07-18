import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link, useParams } from 'react-router-dom';
import './PlaylistFile.css';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import Card from './card';

export default function Playist(){

    const {file}=useParams();
    const{PlaylistObject,ShowArray,DeleteVideoFromPlaylist}=useContext(FilterContext);
    var fileValues=PlaylistObject[file];
    var fileVideos=[];

    for(let i=0;i<ShowArray.length;i++)
    {
        if(fileValues.includes(ShowArray[i].id))
        {
            fileVideos.push(ShowArray[i]);
        }
    }

    return(
        <div className="PlaylistFile-main-container">
             <Sidebar/>
             <div>
                    <h1 id='PlaylistFile-heading'>Videos added to {file} Playlist file</h1>
                        <div className="PlaylistFile-flex-container">    
                                {fileVideos.map((item)=>{ 
                                    return(
                                        <div>
                                            <Link to={`/VideoContainer/${item.id}`}>
                                                 <Card item={item}/>                     
                                            </Link>
                                            <button id="PlaylistFile-delete" onClick={()=>{DeleteVideoFromPlaylist(item.id,file)}}>Delete</button>
                                        </div>
                                    )})
                                }
                        </div>
                </div>
                <ToastContainer />
        </div>
    );
}