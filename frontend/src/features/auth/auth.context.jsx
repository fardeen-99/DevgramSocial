import { createContext, useEffect, useState } from "react";
import { getallpost, Getme } from "./services/auth.api"
import { useLoader } from "../../../Loader.context";




export const Context=createContext()


export const Provider=({children})=>{
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const [allpost,setallpost]=useState([])
const [savepost,setsavepost]=useState([])
  const [showDelete, setShowDelete] = useState(false)
  const [kala, setKala] = useState(false)
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
    const handlegetallpost = async (load=true) => {
        try {
            if(load){
                setloader(true)
            }
        
            const res = await getallpost();
    
            console.log(res.final);
            setallpost(res.final);
        } catch (error) {
            console.log(error);
        } finally {
            setloader(false)
        }
    }

    useEffect(() => {
handlegetallpost()

        fetchUser();

    }, []);




return(
    <Context.Provider  value={{user,loading,allpost,setallpost,setuser,savepost,setsavepost,setloading,fetchUser,handlegetallpost,showDelete,setShowDelete,kala,setKala}} >
        {children}
    </Context.Provider>
)

}