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
        <div className='flex flex-col'>

            <div className='border bg-stone-300 w-[600px] mt-14 ml-[435px]  flex  gap-[220px]'>
                <h1 className='text-4xl p-4 font-semibold'>Aarohi Sales Dewas</h1>

                <button className=" bg-red-500 hover:bg-red-700  h-12 w-32 text-xl mt-3 text-white font-bold  px-4 rounded">
                    <Link to="/" className="">
                        Logout
                    </Link>
                </button>
            </div>

            <div className='flex w-[600px] ml-[435px] mt-5 '>
                <p className='text-xl font-semibold mt-3 '>Invoice History</p>
                <div>
                    <input
                        className='border rounded-xl border-sky-400 h-12 w-40 mt-2 ml-[180px] outline-none p-1'
                        type="text"
                        placeholder='Search by mobile'
                    />
                </div>

                <div>
                    <button className='border bg-blue-600 hover:bg-blue-300 text-white font-bold rounded-lg h-12 mt-2 w-44 ml-8 text-xl'>
                        <Link to={"/addnewinvoice"}>
                            Add Invoice
                        </Link>
                    </button>
                </div>
            </div>

            <div className='ml-[340px] mt-2' >
                <table className='w-[600px] bg-white p-4 ml-[90px]'>
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
                                        className='font-semibold p-2  rounded text-4xl  text-red-600 hover:text-red-400'
                                        onClick={() => handleDelete(invoice.id)}
                                    >
                                        < IoTrashBinSharp />

                                    </button>

                                    <button className='font-semibold  wl-28 rounded text-4xl text-blue-800 hover:text-blue-400'>
                                        <Link to={"/viewinvoice"}><MdOutlinePreview />
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
