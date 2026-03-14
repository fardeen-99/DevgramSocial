import { usePost } from "../../post/hooks/post.hook"
import { Useauth } from "../hooks/auth.hook"
import { useLocation, useNavigate } from "react-router-dom"



const DeleteToggle = ({item, user}) => {
    const {deleteToggle, showDelete} = Useauth()
    const {deletepostHandle} = usePost()
const location=useLocation()
const navigate=useNavigate()
    // Keep it hidden if the post doesn't belong to the logged-in user
    if (user?.id !== item?.user?._id) return null;

    const isShowingDelete = showDelete === item._id;

    

    return (
        <div className="flex items-center justify-end h-8 overflow-hidden">
            <div
                className={`transition-all duration-300 ease-out flex items-center justify-center ${
                    isShowingDelete ? 'w-0 opacity-0 -translate-x-2 pointer-events-none' : 'w-6 opacity-100 translate-x-0 cursor-pointer'
                }`}
                onClick={(e) => {
                    e.stopPropagation();
                    deleteToggle(item._id);
                }}
            >
                <span className='text-xl font-bold pb-3 hover:text-gray-500 text-white transition-colors'>...</span>
            </div>

            <div
                className={`transition-all duration-300 ease-out flex items-center justify-center bg-transparent rounded-md cursor-pointer ${
                    isShowingDelete ? 'w-16 opacity-100 translate-x-0 px-2 py-1.5' : 'w-0 opacity-0 translate-x-2 pointer-events-none px-0 py-1.5'
                }`}
                onClick={async(e) => {
                    e.stopPropagation();
                    if (isShowingDelete) {
                       await deletepostHandle(item._id)
                           if(location.pathname !== "/"){
        navigate("/", { replace: true })
    }
                    }
                }}
            >
                <div
                    className='text-red-600 font-semibold text-sm active:scale-95 transition-transform duration-200 ease-in-out whitespace-nowrap'
                >
                    Delete
                </div>
            </div>
        </div>
    )
}

export default DeleteToggle