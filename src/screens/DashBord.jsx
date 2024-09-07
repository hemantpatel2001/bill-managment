import React from 'react'
import Header from './Header'
import InvoiceHistory from './InvoiceHistory'
import { ToastContainer } from 'react-toastify'


function DashBord() {
    return (
        <div >
            {/* <div>
                <Header />
            </div> */}

            <div>
                <InvoiceHistory />
            </div>
            <ToastContainer />
        </div>

    )
}

export default DashBord
