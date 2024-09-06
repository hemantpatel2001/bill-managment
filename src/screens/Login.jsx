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
    <div className='flex justify-center font-semibold m-[120px]'>
      <div className='flex justify-center items-center w-[300px] h-[200px]'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <div className='h-[300px] p-10 pl-32 gap-4'>
                <h1 className='font-bold text-5xl mb-8 text-sky-800'>Login</h1>
                <div className='mb-4'>
                  <label className='text-2xl'>Email</label>
                  <br />
                  <Field
                    className="border p-1 border-sky-800 placeholder:p-3 text-xl mt-3 w-[400px] outline-none"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />

                  <div className="min-h-[20px]">
                    <ErrorMessage className='text-red-800 text-2xl' name="email" component="div" />
                  </div>
                </div>
                <div className='relative'>
                  <label className='text-2xl'>Password</label>
                  <br />
                  <Field
                    className="border p-1  border-sky-800   placeholder:p-3 text-xl mt-3 w-[400px] outline-none"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />

                  <div className="absolute right-3 top-12 cursor-pointer text-3xl" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>

                  <div className="min-h-[20px]">
                    <ErrorMessage className="text-red-800 text-2xl" name="password" component="div" />
                  </div>
                </div>

                <button
                  className='bg-sky-600 text-white border rounded border-black w-[400px] mt-8 text-2xl p-1 h-min-24'
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
