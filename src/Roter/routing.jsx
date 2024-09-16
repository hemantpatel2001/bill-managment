import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Sidebar/Layout';
import Customer from '../screens/pages/custmer/Customer';
import AddNewCustmor from '../screens/pages/custmer/AddNewCustmor';
import Products from '../screens/pages/products/Products';
import AddProducts from '../screens/pages/products/AddProducts';
import Invoices from '../screens/pages/invoice/Invoices';
import AddNewInvoice from '../screens/pages/invoice/AddNewInvoice';
import Login from '../screens/Login';
import Auth from '../authentic/Auth';
import WithOutLogin from '../authentic/WithOutLogin';
import UpdateCustomer from '../screens/pages/custmer/UpdateCustomer';



const router = createBrowserRouter([

    {
        path: '/',
        element: <WithOutLogin><Login /></WithOutLogin>
    },

    {
        path: '/layout',
        element: <Layout />,
        children: [
            { path: 'customers', element: <Customer /> },
            { path: "new-customer", element: <AddNewCustmor /> },
            { path: "products", element: <Products /> },
            { path: "add-product", element: <AddProducts /> },
            { path: "invoices", element: <Auth><Invoices /></Auth> },
            { path: "add-invoice", element: <AddNewInvoice /> },
            { path: "update-customer", element: <UpdateCustomer /> }
        ],
    },
]);

export default router




