import { useContext } from "react"
import { Login, Logout, Register } from "../services/auth.api"
import { Context } from "../auth.context"
import { useToast } from "../../../contexts/toast.context.jsx"
import { getErrorMessage } from "../../../utils/errorMessage"

export const Useauth = () => {
    // const { setloader } = useLoader()
    const { user, setuser, allpost, setallpost, savepost, setsavepost, loading, setloading,fetchUser,handlegetallpost,showDelete,setShowDelete,kala,setKala} = useContext(Context)
    const { showToast } = useToast()

 


    const Loginhandle = async (form) => {
        try {
            setloading(true)
            const res = await Login(form)

            setuser(res.user)
            showToast("Logged in successfully", "success")
            return true

        } catch (error) {
            showToast(getErrorMessage(error, "Login failed"), "error")
            return false

        } finally {
            setloading(false)
        }

    }

    const RegisterHandle = async (form) => {
        try {
            setloading(true)
            const res = await Register(form)

            setuser(res.user)
            showToast("Account created successfully", "success")
            return true

        } catch (error) {
            showToast(getErrorMessage(error, "Registration failed"), "error")
            return false

        } finally {
            setloading(false)
        }
    }

    const LogoutHandle = async () => {
        try {
            setloading(true)
            await Logout()
            setuser(null)
            showToast("Logged out", "success")
            return true
        } catch (error) {
            showToast(getErrorMessage(error, "Logout failed"), "error")
            return false
        } finally {
            setloading(false)
        }
    }

const deleteToggle=(id)=>{
  setShowDelete((prev) => prev === id ? null : id)
}
    

    return { RegisterHandle, LogoutHandle, handlegetallpost, Loginhandle, fetchUser, user, setuser, allpost, setallpost, savepost, setsavepost, loading,deleteToggle,showDelete,setShowDelete,kala,setKala}


}