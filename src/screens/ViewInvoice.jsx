import React from 'react'

function ViewInvoice() {
    return (
        <div className='flex justify-center  '>

            <div className=' border-2 border-gray-400 rounded h-[550px] w-[800px] p-2'>

                <div className=' h-[80px]  flex justify-center items-center border-b-2  border-gray-400 '>

                    <h1 className='text-7xl font-bold  border border-red-400 mb-7 bg-pink-300'>
                        AAROHI SALES
                    </h1>

                </div>

                <div className='flex gap-3 flex-col border-black border-b-2  '>
                    <div className=' text-2xl'>Invoice Id : <span className='p-1'>1243</span></div>
                    <div className='text-2xl'>Name:<span className='p-1'>Nilam</span></div>
                    <div className='text-2xl'>Email:<span className='p-1'>np4546@gmail.com</span></div>
                    <div className='text-2xl'> Mobile: <span className='p-1'>4545653254</span></div>
                    <div className='text-2xl'>Date:<span className='p-1'> 12-4-24</span> </div>
                </div>
                <div className=' border-b-2 border-black' >
                    <table class="border table w-full h-auto p-4 ">
                        <thead className='text-2xl'>
                            <tr>
                                <th>sr.no</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className=' w-full  text-center text-xl ' >

                            <tr>
                                <td>1</td>
                                <td>weight machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>weight machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>weight machine</td>
                                <td>2</td>
                                <td>2500</td>
                                <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className='text-2xl font-semibold mt-[50px] ml-[600px]'>
                        <span >
                            Total Bill : 15000
                        </span>
                    </div>
                </div>

            </div>

        </div>





    )
}

export default ViewInvoice
