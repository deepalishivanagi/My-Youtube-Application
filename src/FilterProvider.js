import { createContext, useState } from "react";
import { StaticDataArray } from "./StaticDataArray";


export const FilterContext = createContext();

export const FilterProvider=(props)=>{

    const [ShowArray,setShowArray]=useState(StaticDataArray);
    const [isOpen, setIsOpen] = useState(false);
    const [PlaylistObject,setPlaylist]=useState({One:[1],two:[2]})

    function TogglePopup(){
        setIsOpen(!isOpen);
        return;
    }

    function addToPlaylist(file,Videoid){

        var temp=JSON.parse(JSON.stringify(PlaylistObject));
        if(file in temp)
        {
            if(!(temp[file].includes(Videoid)))
            {
                temp[file]=[...temp[file],Videoid];
            }
            
        }
        else
        {
            temp[file]=[Videoid];
        }
        setPlaylist(temp);
        console.log(PlaylistObject);

    }

    function DeletelPlaylistFile(file){
        var temp=JSON.parse(JSON.stringify(PlaylistObject));
        delete temp[file];
        setPlaylist(temp);
    }

    function DeleteVideoFromPlaylist(id,key){
        var temp=JSON.parse(JSON.stringify(PlaylistObject));
        var filterValue=PlaylistObject[key].filter((item)=>{
            return (item!=id);
        })
        temp[key]=filterValue;
        setPlaylist(temp);

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
            TogglePopup,isOpen,PlaylistObject,addToPlaylist,DeletelPlaylistFile,DeleteVideoFromPlaylist}}>
        {props.children}
        </FilterContext.Provider>
    )
}