import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AddNewInvoice = () => {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        // invoiceNumber: '',
        date: '',
        mobile: '',
        email: '',
        products: [{ productName: '', quantity: '', price: '' }]
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        // invoiceNumber: Yup.string().required('Invoice Number is required'),
        date: Yup.date().required('Date is required').nullable(),
        mobile: Yup.string().required('Mobile is required').matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Must be a valid number'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        products: Yup.array().of(
            Yup.object({
                productName: Yup.string().required('Product Name is required'),
                quantity: Yup.number().required('Quantity is required').positive('Must be greater than zero').integer('Must be an integer'),
                price: Yup.number().required('Price is required').positive('Must be greater than zero')
            })
        ).required('At least one product is required')
    });

    const handleSubmit = (values) => {

        const { date, name, mobile, email } = values;
        const total = values.products.reduce((acc, product) => acc + (product.quantity * product.price), 0);
        toast("Data added")
        setTimeout(() => {
            navigate("/dashboard");
        }, 2000)

    };



    return (
        <div className='mt-8 text-xl'>
            <div className=" w-[600px] mx-auto p-4 bg-white border-gray-900 border shadow-2xl hover:shadow-slate-500 rounded-lg mt-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form className="">
                            <div>
                                <label htmlFor="name" className="block text-xl font-medium text-gray-700">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="mt-1 block w-full border pl-1 border-black rounded-md shadow-sm " />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            {/* <div>
                                <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">Invoice Number</label>
                                <Field type="text" id="invoiceNumber" name="invoiceNumber" className="mt-1 block border border-black w-full rounded-md shadow-sm" />
                                <ErrorMessage name="invoiceNumber" component="div" className="text-red-600 text-sm mt-1" />
                            </div> */}

                            <div>
                                <label htmlFor="date" className="block text-xl font-medium text-gray-700">Date</label>
                                <Field
                                    type="date"
                                    name="date"
                                    placeholder="date"
                                    className="mt-1 block w-full border border-black rounded-md shadow-sm" />

                                <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block text-xl font-medium text-gray-700">Mobile</label>
                                <Field
                                    type="text"
                                    name="mobile"
                                    placeholder="Mobile"
                                    className="mt-1 block w-full border p-1 border-black rounded-md shadow-sm" />
                                <ErrorMessage name="mobile" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="test123@gmail.com"
                                    className="mt-1 block w-full border p-1 border-black rounded-md shadow-sm" />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Products
                                </h3>
                                <FieldArray name="products">
                                    {({ push, remove }) => (
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Product Name
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Quantity</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Price
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Total
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {values.products.map((arr, index) => (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <Field
                                                                    type="text"
                                                                    name={`products.${index}.productName`}
                                                                    className="border border-black rounded-md shadow-sm w-full" />
                                                                <ErrorMessage
                                                                    name={`products.${index}.productName`}
                                                                    component="div"
                                                                    className="text-red-600 text-sm mt-1" />
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <Field
                                                                    type="number"
                                                                    name={`products.${index}.quantity`}
                                                                    className="border border-black rounded-md shadow-sm w-full" />
                                                                <ErrorMessage
                                                                    name={`products.${index}.quantity`}
                                                                    component="div"
                                                                    className="text-red-600 text-sm mt-1" />
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <Field
                                                                    type="number"
                                                                    name={`products.${index}.price`}
                                                                    className="border border-black rounded-md shadow-sm w-full" />
                                                                <ErrorMessage
                                                                    name={`products.${index}.price`}
                                                                    component="div"
                                                                    className="text-red-600 text-sm mt-1" />
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {`${Number(values.products[index].quantity) * Number(values.products[index].price) || 0}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => remove(index)}
                                                                    className="text-red-600 hover:text-red-800"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <button
                                                type="button"
                                                onClick={() => push({ productName: '', quantity: '', price: '' })}
                                                className="mt-5   bg-green-600 text-white rounded-md hover:bg-green-700"
                                            >
                                                Add Product
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>

                            <div className="mt-4">
                                <div className="text-lg font-semibold text-gray-900">
                                    Total Bill:
                                    {values.products.reduce((acc, product) => acc + (product.quantity * product.price), 0).toFixed(2)}
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button type="submit" className="p-2  bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddNewInvoice;
