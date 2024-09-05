import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Email = "hp264975@gmail.com";
const Password = "1234567";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    if (values.email === Email && values.password === Password) {
      toast.success('Login successful! Redirecting to dashboard...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      toast.error('Invalid email or password. Please try again.');
    }

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className='flex justify-center font-semibold m-[150px]'>
      <div className='flex justify-center items-center w-[300px] h-[200px]'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className='border border-gray-400 w-[400px] h-[300px] p-10 pl-32 gap-4'>
                <h1 className='font-bold ml-24 text-3xl mb-8'>Login</h1>
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
                <div>
                  <label className='text-xl'>Password</label>
                  <br />
                  <Field
                    className="border border-black placeholder:p-3 text-xl w-[250px]"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage className="text-red-800" name="password" component="div" />
                </div>
                <button className='bg-sky-600 text-white border rounded border-black w-24 ml-24 mt-8' type="submit">Login</button>
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
