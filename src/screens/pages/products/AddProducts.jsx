import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const AddProducts = () => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(' Product name is required')
      .min(3, 'Name must be at least 3 characters'),
    productcode: Yup.string().required('code is required'),
  
    mrp: Yup.number().required(),
    costprice: Yup.number().required(),
    sellingprice: Yup.number().required(),
  



  });

  const initialValues = {
    name: "",
    mrp: "",
    productcode: "",
    sellingprice: "",
    costprice: "",
    image: ""
  };


  const onSubmit = (values, actions) => {
    actions.setSubmitting(false);
    actions.resetForm();
    console.log('Form data:', values);
    toast("data added")

  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Product Name field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder=" enter product name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="name"
                component="div"

                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* product code Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Product Code
              </label>
              <Field
                type="text "
                id="roductcode"
                name="productcode"
                placeholder="product code"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="productcode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*product image filed*/}
            <div className="mb-4">
              <label htmlFor=" image" className="block text-sm font-medium text-gray-700">
                Img
              </label>
              <Field
                type="file"
                id=" image"
                name=" image"
                placeholder=" enter mobile "
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name=" image"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*cost filed */}

            <div className="mb-4">
              <label htmlFor="costprice" className="block text-sm font-medium text-gray-700">
                Cost price
              </label>
              <Field
                type="text"
                id="costprice"
                name="costprice"
                placeholder="cost price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="costprice"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*mrp price */}
            <div className="mb-4">
              <label htmlFor="mrp" className="block text-sm font-medium text-gray-700">
                Mrp
              </label>
              <Field
                type="text"
                id="mrp"
                name="mrp"
                placeholder="MRP"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="mrp"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*selling filed */}

            <div className="mb-4">
              <label htmlFor="costprice" className="block text-sm font-medium text-gray-700">
                Selling Price
              </label>
              <Field
                type="text"
                id="sellingprice"
                name="sellingprice"
                placeholder="sellingprice"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="sellingprice"
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
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;

