
import './card.css';

export default function Card(props){
    var Str =props.item.name;

    return(
        <div class="card" >
             <img src={props.item.imgsrc} id="SingleVideo" alt="video Card Image"></img>
             <h2>{Str.length<40 ? Str : Str.substring(0,40)}...</h2>
             <p><button>Play</button></p>
        </div>   

    );
}