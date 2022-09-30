import { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
const Protected = (props) => {
    const navigate = useNavigate();
    let login = JSON.parse(localStorage.getItem('isLogin'))
    useEffect(() => {
        if (!login[0]) {
            navigate('/')
        }
    }, [login])

    return <>

        {/* {console.log(state)}
        {
           state ? <Outlet/>:
                <Navigate to="/" />
        } */}
        <Outlet />

    </>
}
export default Protected;