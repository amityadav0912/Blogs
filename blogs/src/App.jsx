import React, {useState, useEffect} from "react"
import { useDispatch , useSelector} from "react-redux"
import authService from "./appWriteService/auth"
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components"
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const dummyuserData = useSelector((state)=>state.auth.userData);
  console.log("after dispatch in app.jsx", dummyuserData)

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      console.log("app.jsx userData", userData);
      if(userData){
        dispatch(login({userData}));
      }else{
        console.log("app.jsx, logging out")
        dispatch(logout())
      }
     
      


    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ): null
}

export default App
