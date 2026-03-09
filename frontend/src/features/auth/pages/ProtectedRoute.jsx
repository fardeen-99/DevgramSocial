import React from 'react'
import {Atom} from 'react-loading-indicators'
import { Useauth } from '../hooks/auth.hook'
import { Navigate } from 'react-router-dom'
import { useLoader } from '../../../../Loader.context'

const ProtectedRoute = ({children}) => {


const {user,loading}=Useauth()
const {loader}=useLoader()

if(loading){
    return   <div className="fixed inset-0 z-50 bg-black/70  flex items-center justify-center">
    <Atom color="#1418b9" size="medium" />
  </div>
}

if(!user){
    return <Navigate to="/login" />
}

  return children
}

export default ProtectedRoute