import Navbar from "../components/UI/Navbar"
import Sidebar from "../components/UI/Sidebar"
export const Layout=(props)=>{
    return(
        <div className={props.class}>
            <Navbar/>
            <Sidebar/>
            {props.children}
        </div>
    )
}