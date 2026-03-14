import { useContext, useEffect } from "react"
import { Login, Register } from "../services/auth.api"
import { Context } from "../auth.context"
import { useLoader } from "../../../../Loader.context"

export const Useauth = () => {
    // const { setloader } = useLoader()
    const { user, setuser, allpost, setallpost, savepost, setsavepost, loading, setloading,fetchUser,handlegetallpost,showDelete,setShowDelete} = useContext(Context)

 


    const Loginhandle = async (form) => {
        try {
            const res = await Login(form)

            setuser(res.user)
            console.log(res.user)

        } catch (error) {
            console.log(error);

        } finally {
            setloading(false)
        }

    }

    const RegisterHandle = async (form) => {
        try {
            const res = await Register(form)

            setuser(res.user)

        } catch (error) {
            console.log(error);

        } finally {
            setloading(false)
        }
    }

const deleteToggle=(id)=>{
  setShowDelete((prev) => prev === id ? null : id)
}
    

    return { RegisterHandle, handlegetallpost, Loginhandle, fetchUser, user, setuser, allpost, setallpost, savepost, setsavepost, loading,deleteToggle,showDelete,setShowDelete}


}