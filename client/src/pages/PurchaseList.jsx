import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import PurchaseTable from "../components/PurchaseTable"
import { useNavigate } from "react-router-dom";

function PurchaseList() {
  const navigate = useNavigate();
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('token'))
  
  useEffect(()=>{
      if(!isLoggedIn){
          navigate('/login')
      }
  },[localStorage.getItem('token')])
  return (
    <Layout>
    <PurchaseTable/>
    </Layout>
  )
}

export default PurchaseList