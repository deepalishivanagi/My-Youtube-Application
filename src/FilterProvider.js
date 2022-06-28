import { createContext, useState } from "react";
import { StaticDataArray } from "./StaticDataArray";
import watch_later from "./Images/watch_later.png";
import Playlist from "./Images/Playlist.png";


export const FilterContext = createContext();

export const FilterProvider=(props)=>{

    const [LikedList,setLikedList]=useState(StaticDataArray);
    const [disliketoggle,setdisliketoggle]=useState(0);
    const [liketoggle,setliketoggle]=useState(0);


    function LikedVideoHandler(Videoid){

        var temp=JSON.parse(JSON.stringify(LikedList));
        var count = liketoggle+1;
        if(count%2!=0)
        {
            for(let i=0;i<StaticDataArray.length;i++)
            {
                if(StaticDataArray[i].id==Videoid)
                {
                    temp[i].like=1;
                    temp[i].dislike=0;
                }
            }
            setLikedList(temp);
            setliketoggle(count);
            return;
        }
        else
        {
            for(let i=0;i<StaticDataArray.length;i++)
            {
                if(StaticDataArray[i].id==Videoid)
                {
                    temp[i].like=0;
                }
            }
            setLikedList(temp);
            setliketoggle(count);
            return;

        }
    }

    function DeletelikeHandler(id){
        var templist=JSON.parse(JSON.stringify(LikedList));

        for(let i=0;i<StaticDataArray.length;i++)
        {
            if(StaticDataArray[i].id==id)
            {
                templist[i].like=0;
            }
        }
        setLikedList(templist);
        return;
    }

    function DisLikedVideoHandler(id){
        var temp=JSON.parse(JSON.stringify(LikedList));
        var count = disliketoggle+1;
        if(count%2!=0)
        {
            for(let i=0;i<StaticDataArray.length;i++)
            {
                if(StaticDataArray[i].id==id)
                {
                    temp[i].dislike=1;
                    temp[i].like=0;
                }
            }
         
            setLikedList(temp);
            setdisliketoggle(count);
            return;
        }
        else
        {
            for(let i=0;i<StaticDataArray.length;i++)
            {
                if(StaticDataArray[i].id==id)
                {
                    temp[i].dislike=0;
                }
            }
         
            setLikedList(temp);
            setdisliketoggle(count);
            return;

        }
     

    }


    return(
        <FilterContext.Provider value={{LikedVideoHandler,LikedList,DeletelikeHandler,DisLikedVideoHandler}}>
        {props.children}
        </FilterContext.Provider>
    )
}