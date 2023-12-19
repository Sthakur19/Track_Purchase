import Header from "./Header"
import Sidebar from "./Sidebar"


function Layout({children}) {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="p-4 sm:ml-64 relative top-14">
      <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {children}
      </div>
    </div>
    </>
  )
}

export default Layout