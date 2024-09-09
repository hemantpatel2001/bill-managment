import React from "react";
function ViewInvoice() {
 
    return (
        <div className='flex justify-center p-4'>

            <div className='border-2 border-gray-400 rounded h-auto w-full max-w-[810px] p-4 shadow-2xl shadow-slate-500'>

                <div className='h-[120px]  items-center border-b-2 border-gray-400'>
                    <h1 className='text-4xl border border-gray-400  flex justify-center md:text-5xl font-bold  mb-4 p-2'>
                        AAROHI SALES
                    </h1>
                    <div className="flex flex-col">
                        <span className="font-medium text-xl">Mobile : 7047614326</span>
                        <span className="font-medium text-xl">Address : L-5 Near Bus Stand Dewas M.P 455001</span>
                    </div>

                </div>

                <div className='flex flex-col gap-3 border-black border-b-2 drop-shadow-2xl p-4'>
                    <div className='text-lg md:text-2xl'>
                        Invoice Id: <span className='p-1'>1243</span>
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Name: <span className='p-1'>Nilam</span>
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Email: <span className='p-1'>np4546@gmail.com</span>
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Mobile: <span className='p-1'>4545653254</span>
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Date: <span className='p-1'>12-03-24</span>
                    </div>
                </div>

                <div className='border-b-2 border-black p-4'>
                    <table className='border table-auto w-full h-auto'>
                        <thead className='text-lg md:text-2xl'>
                            <tr>
                                <th>Sr.No</th> 
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-base md:text-xl'>
                            <tr>
                                <td>1</td>
                                <td>Weight Machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Weight Machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Weight Machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-end mt-4'>
                    <div className='text-lg md:text-2xl font-semibold'>
                        Total Bill: <span>15000</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ViewInvoice;
