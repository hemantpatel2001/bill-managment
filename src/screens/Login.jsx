import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../api/slice/ApiSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(4, 'Password must be at least 6 characters'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (values, actions) => {

    const { email, password } = values;
    const { setSubmitting } = actions;

    login({ email, password })
      .then((response) => {
       
        
        const token = response.data.token
        localStorage.setItem("auth", token)
       
        
        setSubmitting(false)
        if (token) {
          toast.success("login successfully")
          navigate("/layout")
         
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
        setSubmitting(false)

      })

  };

  return (
  
    <div
      className='  flex justify-center items-center h-screen bg-cover bg-center bg-transparent '

    >
      <div className='  bg-white rounded shadow-lg p-20 w-[500px] login-image '>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-5xl mb-8 mr-14 text-sky-800 text-center'>Login</h1>
                <div className='mb-4'>
                  <label className='text-3xl '>Email</label>
                  <Field
                    className="border p-1 border-sky-800 placeholder:p-2 text-xl mt-3 w-full outline-none"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage className='text-red-800 text-2xl' name="email" component="div" />
                </div>
                <div className='relative mb-4'>
                  <label className='text-3xl '>Password</label>
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
                  disabled={isSubmitting || isLoading}
                  type="submit"
                >
                  {isSubmitting || isLoading ? 'Submitting...' : 'Login'}
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

export default Login;
