import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Email = "hp264975@gmail.com";
const Password = "1234567";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    if (values.email === Email && values.password === Password) {
      toast.success('Login successful! Redirecting to dashboard...');
      setTimeout(() => {
        navigate('/dashboard');
        actions.setSubmitting(false);  
        actions.resetForm();
      }, 2000);
    } else {
      toast.error('Invalid email or password. Please try again.');
      actions.setSubmitting(false); 
    }
  };

  return (
    <div
      className='flex justify-center items-center h-screen bg-cover bg-center '
      style={{ backgroundImage: 'url("https://previews.123rf.com/images/279photo/279photo1612/279photo161205273/68221977-payment-terminal-with-card-on-white-background-top-view.jpg")' }}
    >
      <div className='bg-opacity-70 rounded shadow-lg p-20 w-[600px]'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-5xl mb-8 text-sky-800 text-center'>Login</h1>
                <div className='mb-4'>
                  <label className='text-2xl'>Email</label>
                  <Field
                    className="border p-1 border-sky-800 placeholder:p-3 text-xl mt-3 w-full  outline-none"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage className='text-red-800 text-2xl' name="email" component="div" />
                </div>
                <div className='relative mb-4'>
                  <label className='text-2xl'>Password</label>
                  <Field
                    className="border p-1 border-sky-800 placeholder:p-3 text-xl mt-3 w-full outline-none"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <div className="absolute right-3 top-12 cursor-pointer text-3xl" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  <ErrorMessage className="text-red-800 text-2xl" name="password" component="div" />
                </div>
                <button
                  className='bg-sky-600 text-white border rounded border-black w-full text-2xl p-2'
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Submitting...' : 'Login'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

