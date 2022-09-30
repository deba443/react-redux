import "./Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { Routes, Route, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate=useNavigate();
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <ul className="sidebar-content_list">
                    <li className="sidebar-content_list--item cursor-pointer" onClick={(e)=>{
                        e.preventDefault();
                        // navigate('')
                        navigate('/welcome')
                    }}>
                        <AiFillHome />
                        <p>Home</p>
                    </li>
                    <li className="sidebar-content_list--item cursor-pointer" onClick={(e)=>{
                        e.preventDefault()
                        navigate('/employee')
                    }}>
                        <ImUserTie />
                        <p>Employee</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;