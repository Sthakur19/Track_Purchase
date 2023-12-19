import { useEffect, useState } from "react";
import axios from "axios";
import PurchaseRow from "./PurchaseRow";

function PurchaseTable() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');
  const user_id = 1;
  const getPurchase = async () => {
    const response = await axios.get(
      `http://localhost:8000/purchase/${user_id}`,{headers:{'Authorization':`Bearer ${token}`}}
    );
    setProducts(response.data.data);
  };

  useEffect(() => {
    getPurchase();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semi mb-8">Purchases</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                Purchase Date
              </th>
            </tr>
          </thead>
          <tbody>
            {
              !products.length && <tr className="h-20"><td></td><td></td><td>No record found</td></tr>
            }
            {products?.map((product) => (
              <PurchaseRow key={product.id} productData={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PurchaseTable;
