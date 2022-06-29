import "./Popup.css";

export default function Popup(props)
{
    var PlaylistFiles=Object.keys(props.PlaylistObject);

    return(

        <div className="Popup-Outerdiv">
            <div className="Popup-innerdiv">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1>Add to Playlist</h1>
                    <>
                        <p>Create a Playlist</p>
                        {PlaylistFiles.map((item)=>{return (<div>{item}</div>)})}
                        <button>Create</button>
                    </>
               
            </div>
        </div>
    );
}