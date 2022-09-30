import { useState } from "react"
import AddUser from "./AddUser"
import "./Employee.css"
import EmployeeData from "./EmployeeData"
import { useSelector } from "react-redux"
const Employee = () => {
    const[action,setAction]=useState('create')
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
                    <button onClick={() => { 
                        setOpen(true);
                        setAction('create')
                     }}>Add Employee</button>

                </div>
                <div className="item">
                    {open && <AddUser cancel={handleClose} open={handleOpen} action={action}/>}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((employeeData)=>(
                                    <EmployeeData user={employeeData} cancel={handleClose} open={handleOpen} action={setAction}/>

                            ))}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}
export default Employee