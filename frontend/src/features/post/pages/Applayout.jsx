import React from 'react'
import Aside from './Aside'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Applayout = () => {

  const location = useLocation()
  return (

<>
    <div className='h-full w-full flex'>
<div className='w-60 hidden md:block z-999 overflow-y-hidden h-full fixed md:static bg-[#0C1014] '>
   <Aside/>
</div>
<div
  className={`flex-1 h-full overflow-y-scroll relative bg-[#0C1014] 
 ${location.pathname.startsWith("/reel") || location.pathname.startsWith("/moodpost") ? "pb-0" : "pb-15 md:pb-0"} `}
>

  <Outlet/>

</div>
    </div>
    <Footer />
 {/* {!location.pathname.startsWith("/reel") && } */}
    </>
  )
}

export default Applayout
