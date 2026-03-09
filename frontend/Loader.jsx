
import {Atom} from "react-loading-indicators"
import { useLoader } from "./Loader.context"
const Loadera = () => {

 const {loader} = useLoader()

 if(!loader) return null

 return (
  <div className="fixed inset-0 z-50 bg-[#0C1014] flex items-center justify-center">
    <Atom color="#1418b9" size="medium" />
  </div>
 )
}

export default Loadera