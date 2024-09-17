import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetcustmerbyidQuery } from '../../../api/slice/ApiSlice';

const UpdateCustomer = () => {

    const { id } = useParams()
    console.log(id, "id");

    const { data } = useGetcustmerbyidQuery(id)
    console.log(data)



    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        mobile: Yup.string()
            .matches(/^[0-9]+$/, 'Mobile number must be digits only')
            .min(10, 'Mobile number must be at least 10 digits')
            .required('Mobile number is required'),
        city: Yup.string().required('City is required'),
    });

    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        city: '',
    };


    const onSubmit = (values, actions) => {
        UpdateCustomer(_id).then((res) => {
            console.log(res)
        })
        console.log(values);
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-24   bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Update Customer</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* Name field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" enter your name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"

                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Email field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" enter your email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Mobile field */}
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile
                            </label>
                            <Field
                                type="text"
                                id="mobile"
                                name="mobile"
                                placeholder=" enter mobile "
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage
                                name="mobile"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                placeholder="enter your city"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage
                                name="city"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>


                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isSubmitting ? 'updating...' : 'update'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateCustomer;
