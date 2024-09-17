import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useProductAddMutation } from '../../../api/slice/ApiSlice';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

  const [productAdd, { data, isError, isLoading }] = useProductAddMutation()
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    productName: Yup.string()
      .required('Product name is required')
      .min(3, 'Name must be at least 3 characters'),
    productCode: Yup.string().required('code is required'),
    MRP: Yup.number().required(),
    costPrice: Yup.number().required(),
    sellingPrice: Yup.number().required(),




  });

  const initialValues = {
    productName: "",
    MRP: "",
    IMG: "",
    productCode: "",
    sellingPrice: "",
    costPrice: "",

  };


  const onSubmit = (values, actions) => {

    productAdd(values).then((res) => {
      console.log(res)
      console.log(values)

      actions.setSubmitting(false);
      actions.resetForm();
      toast("Product added")

      navigate("/layout/products")
    }).catch((err) => {
      console.log(err)
      actions.setSubmitting(false);
      actions.resetForm();
    })



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
                id="productName"
                name="productName"
                placeholder=" enter product name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="productName"
                component="div"

                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* product code Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Code
              </label>
              <Field
                type="text "
                id="productCode"
                name="productCode"
                placeholder="product code"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="productCode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*product image filed*/}
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Img
              </label>
              <Field
                type="text"
                id="img"
                name="img"
                placeholder="enter image code in string  "
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name=" img"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/*cost filed */}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Cost price
              </label>
              <Field
                type="text"
                id="costPrice"
                name="costPrice"
                placeholder="cost price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="costPrice"
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
                id="MRP"
                name="MRP"
                placeholder="MRP"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="MRP"
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
                id="sellingPrice"
                name="sellingPrice"
                placeholder="sellingprice"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="sellingPrice"
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

