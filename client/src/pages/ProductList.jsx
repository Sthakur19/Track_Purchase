import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import ProductTable from "../components/ProductTable"
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('token'))
  
  useEffect(()=>{
      if(!isLoggedIn){
          navigate('/login')
      }
  },[localStorage.getItem('token')])
  return (
    <Layout>
       <ProductTable/>
    </Layout>
  )
}

export default ProductList