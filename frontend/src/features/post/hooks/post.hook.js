import { useContext, useEffect } from "react"
import { Context } from "../post.context"
import { commentposting, detailposting, feedback, folllow, like, personprofile, save, storiya, unfolllow, unlike, unsave, update, upload } from "../services/post.api"
import { Useauth } from "../../auth/hooks/auth.hook"
import { useLoader } from "../../../../Loader.context"


export const usePost = () => {
    const { handlegetallpost, fetchUser,allpost } = Useauth()
    const { singlepost, setSinglepost,story,setStory,userpersonalprofile,setuserpersonalprofile,post,setpost } = useContext(Context)
const {setloader}=useLoader()

    const likeHandle = async (id) => {

        const res = await like(id)
        // await handlegetallpost()
    }
    const unlikeHandle = async (id) => {

        const res = await unlike(id)
        // await handlegetallpost()
    }
    const followHandle = async (id) => {

      await  Promise.all([
             folllow(id)
            // await handlegetallpost()
            , personprofileHandle(id,false)
            ,storyHandle()
            
        ])
    }
    const unfollowHandle = async (id) => {
      await   Promise.all([

            unfolllow(id)
          //  handlegetallpost()
           ,personprofileHandle(id,false)
           ,storyHandle()
        ])
    }
    const uploadHandle = async (formset) => {
        try{
            setloader(true)
           await Promise.all([ upload(formset),
                 handlegetallpost()
            ])
        }finally{
            setloader(false)
        }
    }
    const saveHandle = async (id) => {

      await  Promise.all([  save(id)
        ,handlegetallpost()
        ])

    }
    const unsaveHandle = async (id) => {

        await Promise.all([ unsave(id)
        , handlegetallpost()])

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
        setStory(res.user)
        console.log(res.user)
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

    return ({ likeHandle, unlikeHandle, followHandle, unfollowHandle, uploadHandle, saveHandle, unsaveHandle, detailpostHandle, setSinglepost, singlepost,commentHandle,updateHandle,storyHandle,story,setStory,personprofileHandle,userpersonalprofile,setuserpersonalprofile,HandleFeedBack,saver,liker,post,setpost,followbtn })


}