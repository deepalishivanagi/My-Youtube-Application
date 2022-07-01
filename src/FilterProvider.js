import { createContext, useState } from "react";
import { StaticDataArray } from "./StaticDataArray";
import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
        notify();
        function notify()
        {
             
             toast('Successfully added to playlist!!');
             return;
         }
     
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

    function DeletePlaylistFile(file){
        var temp=JSON.parse(JSON.stringify(PlaylistObject));
        notify();
        function notify()
        {
             
             toast('Playlist deleted!!');
             return;
         }
     
        delete temp[file];
        setPlaylist(temp);
    }

    function DeleteVideoFromPlaylist(id,key){
        var temp=JSON.parse(JSON.stringify(PlaylistObject));
        notify();
        function notify()
        {
             
             toast('Video deleted from playlist!!');
             return;
         }
     
        var filterValue=PlaylistObject[key].filter((item)=>{
            return (item!=id);
        })
        temp[key]=filterValue;
        setPlaylist(temp);

    }

    function LikedVideoHandler(Videoid){

        var temp=JSON.parse(JSON.stringify(ShowArray));
        var index;
      
            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==Videoid)
                {
                    index=i;
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

            notify();
            function notify()
               {
                    if(temp[index].like==1)
                    {
                        toast('Successfully moved to liked list!!');
                       
                    }
                    else{
                        toast('Successfully removed from liked list!!');
                       
                    }
                    return;
                }
            return;
    
    }


    function DeletelikeHandler(id){
        var templist=JSON.parse(JSON.stringify(ShowArray));
        notify();
        for(let i=0;i<ShowArray.length;i++)
        {
            if(ShowArray[i].id==id)
            {
                templist[i].like=0;
            }
        }
        setShowArray(templist);
        function notify()
        {
             
             toast('Deleted video Successfully!!');
             return;
         }
     
        return;
    }

    function DisLikedVideoHandler(id)
    {
        var temp=JSON.parse(JSON.stringify(ShowArray));
        var index;

            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==id)
                {
                    index=i;
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
            notify();
            function notify()
            {
                 if(temp[index].dislike==1)
                 {
                    toast('Video disliked!!');
                 }
                 else{
                    toast('Video removed from dislike!!');
                 }
                 return;
             }
          
         return;
    }

    function WatchlaterHandler(id){
        var temp=JSON.parse(JSON.stringify(ShowArray));
        var index;
      
            for(let i=0;i<ShowArray.length;i++)
            {
                if(ShowArray[i].id==id)
                {
                    index=i;
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
            notify();
            function notify()
            {
                 if(temp[index].watchlater==1)
                 {
                    toast('Successfully added to watch later!!');
                 }
                 else{
                    toast('Successfully removed from watch later!!');
                 }
                 return;
             }

         return;
    }

    function DeletelFromWatchlater(id){
        var templist=JSON.parse(JSON.stringify(ShowArray));    
        notify();

        for(let i=0;i<ShowArray.length;i++)
        {
            if(ShowArray[i].id==id)
            {
                templist[i].watchlater=0;
            }
        }
        setShowArray(templist);
        function notify()
        {
             
             toast('Successfully deleted from watch later!!');
             return;
         }

        return;
    }


    return(
        <FilterContext.Provider value={{LikedVideoHandler,ShowArray,DeletelikeHandler,DisLikedVideoHandler,WatchlaterHandler,DeletelFromWatchlater,
            TogglePopup,isOpen,PlaylistObject,addToPlaylist,DeletePlaylistFile,DeleteVideoFromPlaylist}}>
        {props.children}
        </FilterContext.Provider>
    )
}