import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { IoTrashOutline } from 'react-icons/io5';

const Customer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', city: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', city: 'Los Angeles' },
  ]);


  const handleDelete = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  const handleEdit = (id) => {
    console.log(`Edit customer with id: ${id}`);

  };

  return (
    <div className="max-w-4xl mx-auto  p-6 mt-16 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Email</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Mobile</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">City</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{customer.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{customer.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{customer.mobile}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">{customer.city}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-sm leading-5 text-gray-700">

                  <button
                    onClick={() => handleEdit(customer.id)}
                    className="text-blue-500 hover:text-blue-700 font-bold text-3xl py-1 px-3 rounded mr-2"
                  >
                    <FaUserEdit />
                  </button>


                  <button
                    onClick={() => handleDelete(customer.id)}
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

export default Customer;
