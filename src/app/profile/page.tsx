import Sidebar from "@/components/Sidebar";


export default function ProfilePage() {
  return(
      <>
        <div className="hidden lg:flex">
            <Sidebar />
        </div>
        <div className="grid w-full h-full xl:pl-[300px]">
            Profile
        </div>
        <div className="xl:pl-[300px]">
            
        </div>
      </>
  )
}