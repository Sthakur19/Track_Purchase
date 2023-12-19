import { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import axios from "axios";

import Pagination from "./Pagination";
import Notification from "./Notification";

function ProductTable() {
  const [products,setProducts] = useState([]);
  const [notification, setNotification] = useState(null);
  const token = localStorage.getItem('token');
  const getProducts = async()=>{
        const response = await axios.get('http://localhost:8000/products',{headers:{'Authorization':`Bearer ${token}`}})
        setProducts(response.data.data)
        /** For get product from  api 
         *  const response = await axios.get('https://app-dccapi-stag-0001.azurewebsites.net/api/products')
         *  setProducts(response.data)
         * 
         */
     
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage, setProductsPerPage] = useState(5);

  useEffect(()=>{
    getProducts()
  },[])

  const lastPostIndex = currentPage * ProductsPerPage;
  const firstPostIndex = lastPostIndex - ProductsPerPage;
  const currentProducts = products.slice(firstPostIndex, lastPostIndex);

  return (<>
   <h2 className="text-3xl font-semi mb-8">Products</h2>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="uppercase">
            
            <th scope="col" className="px-6 py-3">
              Item
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            currentProducts?.map((product)=>
            <ProductRow products={currentProducts} key={product.id} productData = {product}
            setNotification={setNotification} />)
          }
          
        </tbody>
      </table>
      <Pagination
                totalProducts={products.length}
                ProductsPerPage={ProductsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setProductsPerPage={setProductsPerPage}
            />
    </div>
    </>
  );
}

export default ProductTable;
