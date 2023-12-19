import axios from "axios";
import { useState } from "react";
import Notification from "./Notification";


function ProductRow({ productData , setNotification}) {
  const token = localStorage.getItem('token');
  const handleBuyClick = async (product_id) => {
    try {
      await axios.post("http://localhost:8000/purchase", {
        user_id: 1,
        product_id,
      },{headers:{'Authorization':`Bearer ${token}`}});
      setNotification("Product added to the purchase list successfully!");
    } catch (error) {
      setNotification(`Error: ${error.message}`);
    }
  };

  const { id, name, description, unitPrice, status } = productData;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="w-64 px-6 py-4">{description}</td>
      <td className="px-6 py-4">{unitPrice}</td>
      <td className="px-6 py-4">
        {status ? (
          <span className="custom-bg-status text-green-800 text-xs font-medium me-2 px-2.5 py-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Available
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-2.5 rounded-full dark:bg-red-900 dark:text-red-300">
            Out of Stock
          </span>
        )}
      </td>
      <td className="px-6 py-4">
        {status ? (
          <button
            onClick={() => handleBuyClick(id)}
            type="button"
            className="text-white uppercase bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </button>
        ) : (
          <button
            disabled="true"
            type="button"
            className="text-gray uppercase bg-gray-300 cursor-not-allowed hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-grey-800"
          >
            Buy
          </button>
        )}
      </td>
    </tr>
  );
}

export default ProductRow;
