import { useState } from "react"
import AddUser from "./AddUser"
import "./Employee.css"
import EmployeeData from "./EmployeeData"
import { useSelector } from "react-redux"
const Employee = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    const userList = useSelector((state) => {
        //  console.log(state.employee)
        return state.employee

    })
    return (
        <div>
            <div className="body">
                <div className="main">
                    <button onClick={() => { setOpen(true) }}>Add user</button>

                </div>
                <div className="item">
                    {open && <AddUser cancel={handleClose} />}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>email</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((employeeData)=>(
                                    <EmployeeData user={employeeData} cancel={handleClose} open={handleOpen}/>

                            ))}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}
export default Employee