import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import authService from "./appWriteService/auth"
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components"
// import {Outlet} from 'html-react-parser'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userDate)=>{
      if(userDate){
        dispatch(login({userDate}));
      }else{
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
      {/* TODO:  <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div>
  ): null
}

export default App
