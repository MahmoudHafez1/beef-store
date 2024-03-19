import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

/**
 * Represents a form for adding or editing product.
 * Add Case:
 * @prop {Function} handleAddProduct - Function to handle adding a new product.Required if adding new product
 * Edit Case:
 * @prop {Function} handleEditProduct - Function to handle editing an existing product by field. Required if editing product
 * @prop {Object} product - The product data for editing. Required if editing product
 * @prop {string} productId - The ID of the product being edited. Required if editing product.
 */

const ProductForm = ({
  handleAddProduct,
  handleEditProduct,
  product,
  productId,
}) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setTouched,
    resetForm,
  } = useFormik({
    enableReinitialize: true,

    initialValues: product || {
      title: '',
      price: '',
      status: 'available',
      description: '',
      imgUrl: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      price: Yup.string()
        .matches(/^\d*\.?\d*$/, 'Price must be number')
        .required('Price is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      if (handleAddProduct) {
        handleAddProduct({ ...values, price: Number(values.price) })
        resetForm()
      }
    },
  })

  useEffect(() => {
    if (product) {
      setTimeout(() => {
        setTouched(product)
      }, 500)
    }
  }, [product, setTouched])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
          return false
        }}
      >
        <div className='flex w-full flex-wrap'>
          <input
            name='title'
            placeholder='Title'
            onChange={(e) => {
              handleChange(e)
              if (productId && e.target.value) {
                handleEditProduct(productId, 'title', e.target.value)
              }
            }}
            onBlur={handleBlur}
            value={values['title'] || ''}
            className='border-2 px-3 h-[50px] flex-1'
          />
          <input
            name='price'
            placeholder='Price'
            onChange={(e) => {
              handleChange(e)
              if (productId && e.target.value && !isNaN(e.target.value)) {
                handleEditProduct(productId, 'price', Number(e.target.value))
              }
            }}
            onBlur={handleBlur}
            value={values['price']}
            className='border-2 border-l-0 px-3 h-[50px] w-[120px]'
          />
          <select
            name='status'
            placeholder='Status'
            onChange={(e) => {
              handleChange(e)
              if (productId && e.target.value) {
                handleEditProduct(productId, 'status', e.target.value)
              }
            }}
            onBlur={handleBlur}
            value={values['status'] || ''}
            className='border-2 border-l-0 px-3 text-sm h-[50px] flex-1'
          >
            <option value={'available'}>Available</option>
            <option value={'unavailable'}>Unavailable</option>
          </select>
        </div>
        <textarea
          name='description'
          placeholder='Description'
          onChange={(e) => {
            handleChange(e)
            if (productId && e.target.value) {
              handleEditProduct(productId, 'description', e.target.value)
            }
          }}
          onBlur={handleBlur}
          value={values['description'] || ''}
          className='border-2 border-t-0  w-full p-3 h-[50px] flex-1'
          style={{ height: '100px' }}
        ></textarea>
        <input
          name='imgUrl'
          placeholder='Image URL'
          onChange={(e) => {
            handleChange(e)
            if (productId) {
              handleEditProduct(productId, 'imgUrl', e.target.value)
            }
          }}
          onBlur={handleBlur}
          value={values['imgUrl'] || ''}
          className='border-2 px-3 h-[50px] w-full mt-[-8px]'
        />
        {Object.keys(errors)?.map((key) => (
          <div key={key}>
            {touched[key] && <p className='text-red-700'>* {errors[key]}</p>}
          </div>
        ))}
        {handleAddProduct && (
          <button
            className='rounded-md text-sm px-4 py-2 bg-red-700 text-white disabled:bg-gray-400 w-full'
            type='submit'
          >
            ADD Product
          </button>
        )}
      </form>
    </div>
  )
}
export default ProductForm
