import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('token'))
    useEffect(()=>{
        if(isLoggedIn){
            navigate('/')
        }
    },[localStorage.getItem('token')])
   
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Update form state based on the input type
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]:value
        }));
      };

      const handleSubmit =async()=>{
        if(formData.email==''){
            alert("Email is required!") 
            return;
        } 
        else if(formData.password==''){
            alert("Password is required!")
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8000/login',{...formData})
            if(response.data.message){
                alert(response.data.message)
                return;
            }
            localStorage.setItem('token',response.data.data)
            navigate('/')

        } catch (error) {
            alert(error)
        }
         
      }

  return (
    <form className="max-w-sm mx-auto my-40">
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="example@domain.com"
        required=""
        onChange={handleChange}
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your password
      </label>
      <input
        type="password"
        name="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
        onChange={handleChange}
      />
    </div>
    
    <button
      onClick={handleSubmit}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
  
  )
}

export default Login