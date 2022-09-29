import { useEffect, useState } from "react";
import { Link, Navigate,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
    // const { children } = props
    const navigate = useNavigate();
    const [state, setState] = useState(null)
    useEffect(() => {
        // let login=JSON.parse(localStorage.getItem('login'))
        let login = localStorage.getItem('isLogin')
        // console.log(login)
        // setState(login)
        if(!login){
            navigate('/')
        }
    },[])

    return <>
            
    {/* {console.log(state)}
        {
           state ? <Outlet/>:
                <Navigate to="/" />
        } */}
        <Outlet/>
    </>
}
export default Protected;