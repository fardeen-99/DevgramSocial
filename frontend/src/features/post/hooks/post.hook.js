import { useContext, useEffect, useRef } from "react"
import { Context } from "../post.context"
import { commentposting, deletepost, detailposting, feedback, folllow, like, moodpost, personprofile, save, storiya, unfolllow, unlike, unsave, update, upload } from "../services/post.api"
import { Useauth } from "../../auth/hooks/auth.hook"
import { useLoader } from "../../../../Loader.context"
import { useNavigate } from "react-router-dom"


export const usePost = () => {
    const { handlegetallpost, fetchUser,allpost } = Useauth()
    const { singlepost, setSinglepost,story,setStory,userpersonalprofile,setuserpersonalprofile,post,setpost,mood,setmood } = useContext(Context)
const {setloader}=useLoader()
const navigate = useNavigate()

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

    const liker = (id,islike)=>{
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
    
     if(islike){
      unlikeHandle(id)
     }else{
      likeHandle(id)
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

  const firstRender = useRef(true)


    useEffect(() => {

  if(firstRender.current){
    firstRender.current = false
    return
  }

    if(mood){
      // Only redirect if NOT on /moodify OR if we are on a mobile screen
      const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
      if(window.location.pathname !== '/moodify' || isMobile){
        const timer=setTimeout(() => {
          navigate("/moodpost")
        }, 1000);
        return()=>clearTimeout(timer)
      }
    }
    
  }, [mood, navigate])


    return ({ likeHandle, unlikeHandle, followHandle, unfollowHandle, uploadHandle, saveHandle, unsaveHandle, detailpostHandle, setSinglepost, singlepost,commentHandle,updateHandle,storyHandle,story,setStory,personprofileHandle,userpersonalprofile,setuserpersonalprofile,HandleFeedBack,saver,liker,post,setpost,followbtn,deletepostHandle,mood,setmood })


}