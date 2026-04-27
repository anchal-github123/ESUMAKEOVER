import { Outlet } from "react-router-dom"
import Header from "../components/Navbar/Header"
import Footer from "../components/footer"
import MobileScreenNav from "../components/Navbar/MobileScreenNav"
import ScrollTop from "../components/ScrollTop"
export default function Layout() {
  return (
    <div>
    {/* header section */}
    <Header/>
    <MobileScreenNav/>
    {/* Main content (changes acccording to the routes) */}

    <main className="max-w-7xl mx-auto p-3">
    <ScrollTop></ScrollTop>
    <Outlet/>
   </main>
    {/* footer section */}
    <Footer/>
   </div>
  )
}
