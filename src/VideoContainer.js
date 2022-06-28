import { upload } from "@testing-library/user-event/dist/upload";
import { useParams } from "react-router-dom"
import { StaticDataArray } from "./StaticDataArray";
import './VideoContainer.css';
import thumbsUp from "./Images/thumbsUp.jpg";
import thumbsDown from "./Images/thumbsDown.jpg";
import watch_later from "./Images/watch_later.png";
import Playlist from "./Images/Playlist.png";

export default function VideoContainer(){

    const {item_id} = useParams();
    var ShowVideo =[];

    for(let i=0;i<StaticDataArray.length;i++)
    {
        if(StaticDataArray[i].id==item_id)
        {
            ShowVideo.push(StaticDataArray[i]);
        }
    }

    return(
        <div className="VideoContainer-main">
            {/* <h1>Inside VideoContainer</h1> */}
            <iframe src={ShowVideo[0].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div id="Video-desc">
                <h2>{ShowVideo[0].name}</h2>
                <ul>
                    <li><img src={thumbsUp}></img>Like</li>
                    <li><img src={thumbsDown}></img>Dislike</li>
                    <li><img src={watch_later}></img>Watch later</li>
                    <li><img src={Playlist}></img>Add to Playlist</li>
                </ul>
                <h3>Description</h3>
                <p>{ShowVideo[0].desc}</p>
            </div>
        </div>
    )
}