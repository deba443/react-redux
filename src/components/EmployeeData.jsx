// import './Employee.css'
import './Employee.css'
import { useDispatch,useSelector } from 'react-redux'
import {delet,edit,update} from '../action/index'
import { useState } from 'react'
import AddUser from './AddUser'
const EmployeeData = (props) => {
    // const[flag,setFlag]=setFlag(false)
    const dispatch=useDispatch()
    const{name,title,email,role,id}=props.user
    const data={
        name:name,
        title:title,
        email:email,
        role:role,
        id:id
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{title}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td className='button'>
                <button onClick={(e)=>{
                    // e.preventDefault();
                    // {<AddUser/>}
                    props.open()
                    props.action('edit')
                    dispatch(update(data))
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