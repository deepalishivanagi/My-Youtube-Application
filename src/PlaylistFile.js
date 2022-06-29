import { useContext } from 'react';
import { FilterContext } from './FilterProvider';
import { Link, useParams } from 'react-router-dom';
import './PlaylistFile.css';
import Sidebar from './Sidebar';

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
                                                <div >
                                                    <img src={item.imgsrc} id="SingleVideo" ></img>    
                                                </div>                    
                                            </Link>
                                            <button onClick={()=>{DeleteVideoFromPlaylist(item.id,file)}}>delete</button>
                                        </div>
                                    )})
                                }
                        </div>
                </div>
        </div>
    );
}