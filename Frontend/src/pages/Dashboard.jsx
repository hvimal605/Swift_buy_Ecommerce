import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/common/core/Siderbar"


function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col md:flex-row min-h-[calc(100vh-3.5rem)]">
      <Sidebar className="h-1/4 md:h-[calc(100vh-3.5rem)]" />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
