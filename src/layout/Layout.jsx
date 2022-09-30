import Navbar from "../components/UI/Navbar"
import Sidebar from "../components/UI/Sidebar"
import { Outlet } from "react-router"
export const Layout=(props)=>{
    return(
        <div className={props.class}>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}