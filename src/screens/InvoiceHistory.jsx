import React, { useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { MdOutlinePreview } from 'react-icons/md';
import { Link } from 'react-router-dom';

function InvoiceHistory() {

    const [invoices, setInvoices] = useState([
        { id: 1, name: 'nilam', mobile: '7047543221', invoiceId: "2283" },
        { id: 2, name: 'rahul', mobile: '7047543222', invoiceId: "22929" },
    ]);

 
    const handleDelete = (id) => {
      
        const confirmDelete = window.confirm("Are you sure you want to delete this invoice?");
        
        if (confirmDelete) {
            
            const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
            
            setInvoices(updatedInvoices);
        }
    };

    return (
        <div>

            <div className='border ml-[200px] bg-stone-300 w-[1000px] mt-5'>
                <h1 className='text-4xl p-4 font-semibold ml-[400px]'>Aarohi Sales Dewas</h1>
            </div>

            <div className='flex w-[600px] ml-[435px] mt-5'>
                <p className='text-xl font-semibold mt-3 '>Invoice History</p>
                <div>
                    <input
                        className='border rounded-xl border-sky-400 h-12 w-40 mt-2 ml-[180px] outline-none p-1'
                        type="text"
                        placeholder='Search by mobile'
                    />
                </div>

                <div>
                    <button className='border bg-blue-600 hover:bg-blue-300 text-white font-bold rounded-lg h-12 mt-2 w-44 ml-6 text-xl'>
                        <Link to={"/addnewinvoice"}>
                        Add Invoice
                        </Link>
                    </button>
                </div>
            </div>

            <div className='p-8 flex justify-center'>
                <table className='w-[600px] bg-white p-4'>
                    <thead>
                        <tr>
                            <th className='border p-2 text-center'>Invoice Id</th>
                            <th className='border p-2 text-center'>Name</th>
                            <th className='border p-2 text-center'>Mobile</th>
                            <th className='border p-2 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td className='border p-1 text-center'>{invoice.invoiceId}</td>
                                <td className='border p-1 text-center'>{invoice.name}</td>
                                <td className='border p-1 text-center'>{invoice.mobile}</td>
                                <td className='border p-1 text-center'>
                                    <button
                                        className=' font-semibold p-2  rounded text-3xl'
                                        onClick={() => handleDelete(invoice.id)}
                                    >
                                      <IoTrashBinSharp />

                                    </button>

                                    <button className=' font-semibold  w-24 rounded text-3xl'>
                                        <Link to={"/viewinvoice"}><MdOutlinePreview/>
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default InvoiceHistory;
