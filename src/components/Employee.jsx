import { useState } from "react"
import AddUser from "./AddUser"
import "./Employee.css"
import EmployeeData from "./EmployeeData"
const Employee = () => {
    const [isLogin, setIsLogin] = useState(false)
    const[open,setOpen]=useState(true)
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <div>
            <div className="body">
                <div className="main">
                    <button onClick={() => {setIsLogin(true);setOpen(true)}}>Add user</button>

                </div>
                <div className="item">
                    {isLogin && open?<AddUser cancel={handleClose}/>:null}
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>email</th>
                            <th>role</th>
                            <th>action</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="button">
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
    )
}
export default Employee