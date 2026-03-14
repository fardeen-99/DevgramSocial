import { createContext, useState } from "react";


export const Context=createContext()


export const ProviderPost=({children})=>{

    const[singlepost,setSinglepost]=useState([])
    const[story,setStory]=useState([])
    const [userpersonalprofile,setuserpersonalprofile]=useState([])
const[post,setpost]=useState([])
const [mood,setmood]=useState("neutral")



    return(
<Context.Provider value={{singlepost,setSinglepost,story,post,setpost,setStory,userpersonalprofile,setuserpersonalprofile,mood,setmood}} >
    {children}
</Context.Provider>
    )
}   