import { useContext, useEffect, useRef } from "react"
import { Context } from "../post.context"
import { commentposting, deletepost, detailposting, feedback, folllow, like, moodpost, personprofile, save, storiya, unfolllow, unlike, unsave, update, upload } from "../services/post.api"
import { Useauth } from "../../auth/hooks/auth.hook"
import { useLoader } from "../../../../Loader.context"
import { useNavigate } from "react-router-dom"
import { useToast } from "../../../contexts/toast.context.jsx"
import { getErrorMessage } from "../../../utils/errorMessage"


export const usePost = () => {
    const { handlegetallpost, fetchUser,allpost } = Useauth()
    const { singlepost, setSinglepost,story,setStory,userpersonalprofile,setuserpersonalprofile,post,setpost,mood,setmood } = useContext(Context)
const {setloader}=useLoader()
const navigate = useNavigate()
const { showToast } = useToast()

    const likeHandle = async (id) => {

        const res = await like(id)
        // await handlegetallpost()
    }
    const unlikeHandle = async (id) => {

        const res = await unlike(id)
        // await handlegetallpost()
    }
    const followHandle = async (id) => {
setStory((prev)=>{
  return prev.map((item)=>{
    if(item._id===id){
      return{
        ...item,
        isfollowing:!item.isfollowing
      }
    }
    return item
  })
})
      await  Promise.all([
             folllow(id)
            // await handlegetallpost()
            , personprofileHandle(id,false)
            // ,storyHandle()
            
        ])
    }
    const unfollowHandle = async (id) => {
      setStory((prev)=>{
        return prev.map((item)=>{
          if(item._id===id){
            return{
              ...item,
              isfollowing:!item.isfollowing
            }
          }
          return item
        })
      })
      await   Promise.all([

            unfolllow(id)
          //  handlegetallpost()
           ,personprofileHandle(id,false)
          //  ,storyHandle()
        ])
    }
    const uploadHandle = async (formset) => {
        try{
      // setloader(true)
          const res=await upload(formset)
          setpost(prev=>[res.response,...prev])
          navigate("/")
          await handlegetallpost(false)
      
        }finally{
            setloader(false)
        }
    }
    const saveHandle = async (id) => {

      await  save(id)
        // ,handlegetallpost()
        

    }
    const unsaveHandle = async (id) => {

        await unsave(id)
        // , handlegetallpost()
        

    }

    const detailpostHandle = async (id,load=true) => {
        try{
            if(load){
                setloader(true)
            }
            const res = await detailposting(id)
            setSinglepost(res.detailpost)
            console.log(res.detailpost)
        }finally{
            setloader(false)
        }
    }
    const commentHandle=async(id,comment)=>{
        const res=await Promise.all([ commentposting(id,comment)
        ,detailpostHandle(id,false)])
       
    }


    const updateHandle=async(id,formset)=>{
        const res=await Promise.all([ update(id,formset),
         handlegetallpost()])
    }
    const storyHandle=async()=>{
        const res=await storiya()
        console.log(res.user)
        setStory(res.user)
    }


const personprofileHandle=async(id,load=true)=>{
    try{
        if(load){
            setloader(true)
        }
    const res=await personprofile(id)
    setuserpersonalprofile(res.user)
    console.log(res.user)
    }finally{
        setloader(false)
    }
}

const HandleFeedBack=async(name,message)=>{
  const res=await feedback(name,message)
  console.log(res)
}

const deletepostHandle = async (id) => {

  setpost(prev => prev.filter(item => item._id !== id))

  try{
    await deletepost(id)
    await handlegetallpost(false)
    
  }catch(err){
    console.log(err)
  }

}

// const moodpostHandle=async(mood)=>{
//   const res=await moodpost(mood)
// }

    const liker = async (id,islike)=>{
      console.log("hello")
     setpost(prev =>
      prev.map(item=>{
       if(item._id===id){
        return{
         ...item,
         islike:!item.islike,
         likecount:islike ? item.likecount - 1 : item.likecount + 1
        }
       }
       return item
      })
     )
    
     try{
      if(islike){
        await unlikeHandle(id)
      }else{
        await likeHandle(id)
      }
     }catch(err){
      // rollback optimistic update
      setpost(prev =>
        prev.map(item=>{
          if(item._id===id){
            return{
              ...item,
              islike:islike,
              likecount:islike ? item.likecount + 1 : item.likecount - 1
            }
          }
          return item
        })
      )
      showToast(getErrorMessage(err, "Action failed"), "error")
     }
    }
    
    const followbtn=(id,isfollow)=>{
    
    setpost(prev=>prev.map((item)=>{
      if(item.user._id===id){
        return{
          ...item,
          isfollow:!isfollow
        }
    
      }
      return item
    }))
    
    if(isfollow){
      unfollowHandle(id)
    }else{
      followHandle(id)
    }
    
    }
    
    const saver=(id,save)=>{
      console.log("hello")
      console.log(id,save)
    setpost(prev=>prev.map((item)=>{
      if(item._id===id){
        return{
    ...item,
    save:!save,
        }
      }
      return item
    }))
    
    if(save){
      unsaveHandle(id)
    }else{
      saveHandle(id)
    }
    
    }
     
useEffect(() => {
    setpost(allpost)
  }, [allpost])


  const personalfollow=(id,userfollow)=>{

    setuserpersonalprofile(prev=>{
        if(prev.id===id){
          return{
          ...prev,
          userfollow:!userfollow
          }
        }
        return prev
      }
   )

if(userfollow){
  unfollowHandle(id)
}else{
  followHandle(id)
}

  }



    return ({ likeHandle, unlikeHandle, followHandle, unfollowHandle, uploadHandle, saveHandle, unsaveHandle, detailpostHandle, setSinglepost, singlepost,commentHandle,updateHandle,storyHandle,story,setStory,personprofileHandle,userpersonalprofile,setuserpersonalprofile,HandleFeedBack,saver,liker,post,setpost,followbtn,deletepostHandle,mood,setmood,personalfollow })


}