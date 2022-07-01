import { useState } from "react";
import "./Popup.css";

export default function Popup(props)
{
    var PlaylistFiles=Object.keys(props.PlaylistObject);
    const[ClickCreate,setClickCreate] =useState(false);
    const[fileNameIs,setfileNameIs] =useState("");

    function Filename(e)
    {
        setfileNameIs(e.target.value);
    }


    function ShowInputBox()
    {
        setClickCreate(!ClickCreate);
    
    }
    function InputValueHandler()
    {
        setfileNameIs("");
    }


    return(

        <div className="Popup-Outerdiv">
            <div className="Popup-innerdiv">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1>Add to Playlist</h1>
                    <>
                        {ClickCreate && 
                        <div><input placeholder="Enter playlist name" type="text" value={fileNameIs} onChange={(e)=>{Filename(e)}}></input>
                        <button onClick={()=>{props.AddNewPlaylistHandler(fileNameIs);InputValueHandler()}}>Add</button></div>
                        }
                        {PlaylistFiles.map((item)=>{return (<div onClick={()=>{props.addToPlaylist(item,props.Videoid)}}>{item}</div>)})}
                        <button onClick={ShowInputBox}>Create a Playlist</button>
                    </>
               
            </div>
        </div>
    );
}



