import { createContext, useState } from "react";
import { StaticDataArray } from "./StaticDataArray";


export const FilterContext = createContext();

export const FilterProvider=(props)=>{

    const [ShowArray,setShowArray]=useState(StaticDataArray);
    const [isOpen, setIsOpen] = useState(false);
    const [PlaylistObject,setPlaylist]=useState({"One":[1,2],"two":[3,4]})

    function TogglePopup(){
        setIsOpen(!isOpen);
        return;
    }

    function LikedVideoHandler(Videoid){

        var temp=JSON.parse(JSON.stringify(ShowArray));
      
            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==Videoid)
                {
                    if(ShowArray[i].like==1)
                    {
                        temp[i].like=0;
                    }
                    else
                    {
                        temp[i].like=1;
                        temp[i].dislike=0;
                    }
                  
                }
            }
            setShowArray(temp);
            return;
    
    }

    function DeletelikeHandler(id){
        var templist=JSON.parse(JSON.stringify(ShowArray));

        for(let i=0;i<ShowArray.length;i++)
        {
            if(ShowArray[i].id==id)
            {
                templist[i].like=0;
            }
        }
        setShowArray(templist);
        return;
    }

    function DisLikedVideoHandler(id)
    {
        var temp=JSON.parse(JSON.stringify(ShowArray));
    
            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==id)
                {
                    if(ShowArray[i].dislike==1)
                    {
                        temp[i].dislike=0;
                    }
                    else
                    {
                        temp[i].dislike=1;
                        temp[i].like=0;
                        
                    }
                   
                }
            }         
            setShowArray(temp);
          
         return;
    }

    function WatchlaterHandler(id){
        var temp=JSON.parse(JSON.stringify(ShowArray));
    
            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==id)
                {
                    if(ShowArray[i].watchlater==1)
                    {
                        temp[i].watchlater=0;
                    }
                    else
                    {
                        temp[i].watchlater=1;    
                    }
                   
                }
            }         
            setShowArray(temp);
          
         return;
    }

    function DeletelFromWatchlater(id){
        var templist=JSON.parse(JSON.stringify(ShowArray));

        for(let i=0;i<ShowArray.length;i++)
        {
            if(ShowArray[i].id==id)
            {
                templist[i].watchlater=0;
            }
        }
        setShowArray(templist);
        return;
    }


    return(
        <FilterContext.Provider value={{LikedVideoHandler,ShowArray,DeletelikeHandler,DisLikedVideoHandler,WatchlaterHandler,DeletelFromWatchlater,
            TogglePopup,isOpen,PlaylistObject}}>
        {props.children}
        </FilterContext.Provider>
    )
}