import "./Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { AiFillHome,AiOutlineMenu} from "react-icons/ai";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <ul className="sidebar-content_list">
                    {/* <li className="sidebar-content_list--item">
                        <MdDashboard />
                        <p>Dashboard</p>
                    </li> */}
                    <li className="sidebar-content_list--item">
                        <AiFillHome />
                        <p>Home</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;