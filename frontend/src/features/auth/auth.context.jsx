import { createContext, useEffect, useState } from "react";
import { getallpost, Getme } from "./services/auth.api"
import { useLoader } from "../../../Loader.context";




export const Context=createContext()


export const Provider=({children})=>{
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const [allpost,setallpost]=useState([])
const [savepost,setsavepost]=useState([])
const{setloader}=useLoader()


   const fetchUser = async () => {
        try {
            
            const res = await Getme();
            setuser(res.user);
        } catch (err) {
            setuser(null);
        } finally {
            setloading(false);
            setloader(false)
        }
    };
    const handlegetallpost = async () => {

        try {

            const res = await getallpost();
    
            console.log(res.final);
            setallpost(res.final);
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
handlegetallpost()

        fetchUser();

    }, []);




return(
    <Context.Provider  value={{user,loading,allpost,setallpost,setuser,savepost,setsavepost,setloading,fetchUser,handlegetallpost}} >
        {children}
    </Context.Provider>
)

}