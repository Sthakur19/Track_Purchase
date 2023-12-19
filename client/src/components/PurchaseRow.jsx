function PurchaseRow({ productData }) {
  
  const { id, name, description, unitPrice,purchase_date } = productData;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{unitPrice}</td>
      <td className="px-6 py-4">
       {purchase_date}
      </td>
    
    </tr>
  );
}

export default PurchaseRow;
