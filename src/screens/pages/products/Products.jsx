import React from 'react';
import { Link } from 'react-router-dom';
import { useGetproductsQuery } from '../../../api/slice/ApiSlice';


const Products = () => {
  const { data: productdata, isLoading, error } = useGetproductsQuery();




  if (isLoading) return <div className='flex justify-center text-sky-800 text-4xl p-44'>Loading...</div>;
  if (error) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching Product</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center"> Products Details</h1>

      <div className="overflow-auto max-h-[400px]">
        <table className="min-w-full bg-white table-auto">
          <thead className=''>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Product Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Product Code</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Cost Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">MRP</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Selling Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Action</th>

            </tr>
          </thead>
          <tbody>
            {productdata?.data.slice().reverse().map((product) => (
              <tr key={product.id} >
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.productName}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.productCode}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.costPrice}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.MRP}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.sellingPrice}</td>
               
                <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">

                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Edit</button>

                  <button

                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
