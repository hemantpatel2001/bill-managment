import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { IoTrashOutline } from 'react-icons/io5';

const Products = () => {
  const [products,setProducts] = useState([
    { id: 1, name: 'sell', productcode : '123433', img: "", costprice: '45',sellingprice:"80" ,mrp:"100" },
    { id: 2, name: 'machine ', productcode : '2443', img: "", costprice: '45',sellingprice:"80" ,mrp:"100" },
  ]);


  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEdit = (id) => {
    console.log(`Edit product with id: ${id}`);

  };

  return (
    <div className="max-w-4xl mx-auto  p-6 mt-16 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Products Details</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Product Code</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Img</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Cost Price</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Selling Price</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Mrp</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.productcode}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.img}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.costprice}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.sellingprice}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{product.mrp}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">

                  <button
                    onClick={() => handleEdit(product.id)}
                    className="text-blue-500 hover:text-blue-700 font-bold text-3xl py-1 px-3 rounded mr-2"
                  >
                    <FaUserEdit />
                  </button>


                  <button
                    onClick={() => handleDelete(product.id)}
                    className="hover:text-red-400  text-red-600 font-bold py-1 px-3 rounded text-3xl"
                  >
                    <IoTrashOutline />
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
