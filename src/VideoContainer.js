
import { useParams } from "react-router-dom"
import { StaticDataArray } from "./StaticDataArray";
import './VideoContainer.css';
import thumbsUp from "./Images/thumbsUp.jpg";
import greenLiked from "./Images/greenLiked.jpg";
import thumbsDown from "./Images/thumbsDown.jpg";
import redDisliked from "./Images/redDisliked.jpg";
import watch_later from "./Images/watch_later.png";
import Playlist from "./Images/Playlist.png";
import { useContext } from "react";
import { FilterContext } from "./FilterProvider";

export default function VideoContainer(){

    const {item_id} = useParams();
    var ShowVideo =[];
    const {LikedVideoHandler,LikedList,DisLikedVideoHandler} =useContext(FilterContext);

    for(let i=0;i<LikedList.length;i++)
    {
        if(LikedList[i].id==item_id)
        {
            ShowVideo.push(LikedList[i]);
        }
    }

    return(
        <div className="VideoContainer-main">
            {/* <h1>Inside VideoContainer</h1> */}
            <iframe src={ShowVideo[0].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div id="Video-desc">
                <h2>{ShowVideo[0].name}</h2>
                <ul>
                    <li><img src={ShowVideo[0].like ? greenLiked : thumbsUp } onClick={()=>{LikedVideoHandler(ShowVideo[0].id)}}></img>Like</li>
                    <li><img src={ShowVideo[0].dislike ? redDisliked : thumbsDown } onClick={()=>{DisLikedVideoHandler(ShowVideo[0].id)}}></img>Dislike</li>
                    <li><img src={watch_later}></img>Watch later</li>
                    <li><img src={Playlist}></img>Add to Playlist</li>
                </ul>
                <h3>Description</h3>
                <p>{ShowVideo[0].desc}</p>
            </div>
        </div>
    )
}