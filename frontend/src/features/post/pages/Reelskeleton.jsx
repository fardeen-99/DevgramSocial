export const ReelSkeleton = () => {
 return (
  <div className="w-full h-screen bg-zinc-800 animate-pulse flex items-end p-4">
   <div className="flex gap-3 items-center">
    <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
    <div className="h-4 w-32 bg-zinc-700 rounded"></div>
   </div>
  </div>
 )
}