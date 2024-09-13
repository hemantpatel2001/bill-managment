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



const router = createBrowserRouter([

    {
        path: '/',
        element: <WithOutLogin><Login/></WithOutLogin>
    },

    {
        path: '/layout',
        element:<Auth><Layout/></Auth> ,
        children: [
            { path: 'customers', element:<Auth><Customer /> </Auth> },
            { path: "new-customer", element: <Auth><AddNewCustmor /></Auth> },
            { path: "products", element: <Auth><Products /></Auth> },
            { path: "add-product", element: <Auth><AddProducts /></Auth> },
            { path: "invoices", element: <Auth><Invoices /></Auth> },
            { path: "add-invoice", element: <Auth><AddNewInvoice /></Auth> }
        ],
    },
]);

export default router




