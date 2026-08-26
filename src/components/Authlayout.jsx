import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected({children,authentication=true})
{
    const [loading,setloading] = useState(true);
    const navigate = useNavigate();
    const authstatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && authstatus!==authentication)
        {
            navigate("/login")
        }
        else if(!authentication && authstatus!==authentication){
            navigate("/")
        }
        setloading(false)
    },[authstatus,navigate,authentication])
    return loading? <h1>LOADING..........</h1> : <>{children}</>
}