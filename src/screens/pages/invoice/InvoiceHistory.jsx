import React, { useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { MdOutlinePreview } from 'react-icons/md';
import { Link } from 'react-router-dom';

function InvoiceHistory() {
    const [invoices, setInvoices] = useState([
        { id: 1, name: 'nilam', mobile: '7047543221', invoiceId: "2283" },
        { id: 2, name: 'rahul', mobile: '7047543222', invoiceId: "22929" },
        { id: 3, name: 'priya', mobile: '7047543221', invoiceId: "2283" },
        { id: 4, name: 'rohit', mobile: '7047543222', invoiceId: "22929" },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this invoice?");
        if (confirmDelete) {
            const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
            setInvoices(updatedInvoices);
        }
    };

    
    const filteredInvoices = invoices.filter(invoice =>
        invoice.mobile.includes(searchTerm)
    );

    return (
        <div className='flex flex-col items-center'>
            <div className='border bg-stone-300 w-full max-w-4xl mt-14 px-4 py-2 flex justify-between items-center'>
                <h1 className='text-3xl md:text-4xl font-semibold'>Aarohi Sales Dewas</h1>
                <button className="bg-red-500 hover:bg-red-700 h-12 w-28 md:w-32 text-lg md:text-xl text-white font-bold rounded">
                    <Link to="/" className="">
                        Logout
                    </Link>
                </button>
            </div>

            <div className='flex flex-col md:flex-row w-full max-w-4xl mt-5 px-4'>
                <p className='text-xl font-semibold mb-4 md:mb-0'>Invoice History</p>
                <div className='md:ml-auto flex flex-col md:flex-row gap-4'>
                    <input
                        className='border rounded-xl border-sky-400 h-12 w-full md:w-48 outline-none p-2'
                        type="text"
                        placeholder='Search by mobile'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className='border bg-blue-600 hover:bg-blue-300 text-white font-bold rounded-lg h-12 w-full md:w-48 text-xl'>
                        <Link to={"/addnewinvoice"}>
                            Add Invoice
                        </Link>
                    </button>
                </div>
            </div>

            <div className='w-full max-w-4xl mt-6 overflow-x-auto'>
                <table className='w-full bg-white'>
                    <thead>
                        <tr>
                            <th className='border p-2 text-center'>Invoice Id</th>
                            <th className='border p-2 text-center'>Name</th>
                            <th className='border p-2 text-center'>Mobile</th>
                            <th className='border p-2 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInvoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td className='border p-2 text-center'>
                                    {invoice.invoiceId}
                                </td>
                                <td className='border p-2 text-center'>
                                    {invoice.name}
                                </td>
                                <td className='border p-2 text-center'>
                                    {invoice.mobile}
                                </td>
                                <td className='border p-2 text-center'>
                                    <button
                                        className='font-semibold p-2 rounded text-3xl md:text-4xl text-red-600 hover:text-red-400'
                                        onClick={() => handleDelete(invoice.id)}
                                    >
                                        <IoTrashBinSharp />
                                    </button>
                                    <button className='font-semibold ml-4 p-2 rounded text-3xl md:text-4xl text-blue-800 hover:text-blue-400'>
                                        <Link to={"/viewinvoice"}><MdOutlinePreview /></Link>
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
