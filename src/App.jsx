import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux';
import authservice from './appwrite/auth.js'
import './App.css'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom';

function App() {
  const[loading,setloading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getcurrentuser().then((userdata)=>{
      if(userdata)
        {
          dispatch(login({userdata}))
        }
        else{
          dispatch(logout())
        }
    })
    .finally(()=>setloading(false))
  },[])
  return !loading ?(
    <div className = 'min-h-screen flex flex-wrap bg-gray-400 content-between'>
      <div className = 'w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
