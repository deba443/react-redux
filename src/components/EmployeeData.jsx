// import './Employee.css'
import './Employee.css'
import { useDispatch } from 'react-redux'
import {delet,edit} from '../action/index'
import { useState } from 'react'
import AddUser from './AddUser'
const EmployeeData = (props) => {
    const[flag,setFlag]=useState(false)
    const dispatch=useDispatch()
    const{name,title,email,role,id}=props.user
    // setFlag(false)
    return (
        <tr>
            {flag && <AddUser cancel={props.cancel} data={props.user} />}
            <td>{name}</td>
            <td>{title}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td className='button'>
                <button onClick={(e)=>{
                    e.preventDefault();
                    // setFlag(true)
                    props.open()
                    dispatch(edit(id))
                }}>Update</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch(delet(id))
                }}>Delete</button>
            </td>
        </tr>


    )
}
export default EmployeeData