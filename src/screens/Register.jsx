import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { Link } from 'react-router-dom';

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    mobile: yup.string()
        .matches(phoneRegExp, 'Mobile number is not valid')
        .required('Mobile number is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters'),
    conformpassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

function Register() {
    return (
        <div className='flex justify-center font-semibold m-[150px]'>
            <div className='flex justify-center items-center w-[300px] h-[200px]'>
                <Formik
                    initialValues={{ name: "", mobile: "", dob: "", email: "", password: "", conformpassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        actions.resetForm();
                    }}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <div className='border border-gray-400 w-[400px] h-[500px] p-10 pl-32 mt-10 gap-6'>
                                <h1 className='font-bold ml-20 text-3xl mb-8'>Register</h1>
                                <div className='mb-4'>
                                    <label className='text-xl'>Name</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px]"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                    <ErrorMessage className='text-red-800' name="name" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-xl'>Email</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px]"
                                        name="email"
                                        type="text"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage className='text-red-800' name="email" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-xl'>Mobile</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px]"
                                        name="mobile"
                                        type="text"
                                        placeholder="Enter your mobile"
                                    />
                                    <ErrorMessage className='text-red-800' name="mobile" component="div" />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-xl'>Date Of Birth</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px]"
                                        name="dob"
                                        type="date"
                                    />
                                    <ErrorMessage className='text-red-800' name="dob" component="div" />
                                </div>
                                <div>
                                    <label className='text-xl'>Password</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px] mb-4"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage className="text-red-800" name="password" component="div" />
                                </div>
                                <div>
                                    <label className='text-xl'>Confirm Password</label>
                                    <br />
                                    <Field
                                        className="border border-black placeholder:p-3 text-xl w-[250px]"
                                        name="conformpassword"
                                        type="password"
                                        placeholder="Enter the same password"
                                    />
                                    <ErrorMessage className="text-red-800" name="conformpassword" component="div" />
                                </div>
                                <button className='bg-sky-600 text-white border rounded border-black w-24 ml-24 mt-10' type="submit"><Link to="/"></Link>Register</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
