// context/LoaderContext.jsx
import { createContext, useContext, useState } from "react"

const LoaderContext = createContext()

export const LoaderProvider = ({ children }) => {

 const [loader,setloader] = useState(false)

 return (
  <LoaderContext.Provider value={{loader,setloader}}>
   {children}
  </LoaderContext.Provider>
 )
}

export const useLoader = () => useContext(LoaderContext)