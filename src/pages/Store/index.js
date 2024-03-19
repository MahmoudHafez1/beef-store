import React, { useState, useEffect } from 'react'
import { products as productsData } from '../../data/products'
import ProductList from './sections/ProductList'
import Inventory from './sections/Inventory'
import Cart from './sections/Cart'

const Store = () => {
  const [products, setProducts] = useState({})
  const [cart, setCart] = useState({})

  const loadSampleData = () => {
    localStorage.setItem('products', JSON.stringify(productsData))
    setProducts(productsData)
    localStorage.removeItem('cart')
    setCart({})
  }

  //on app mount: retrieve data from localstorage if exists or load sample data
  useEffect(() => {
    if (!localStorage.getItem('products')) {
      loadSampleData()
    } else {
      setProducts(JSON.parse(localStorage.getItem('products')))
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    }
  }, [])

  const handleAddToCart = (productId) => {
    const newCart = {
      ...cart,
      [productId]: cart[productId] ? cart[productId] + 1 : 1,
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCart(newCart)
  }

  const handleAddProduct = (product) => {
    const ids = Object.keys(products)
    const newId = Number(ids[ids.length - 1]) + 1
    const newProducts = {
      ...products,
      [newId]: product,
    }
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts)
  }

  //Function to edit product by field
  const handleEditProduct = (id, key, value) => {
    const newProducts = { ...products, [id]: { ...products[id], [key]: value } }
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts)
  }

  return (
    <main className='grid grid-cols-5'>
      <section className='col-span-5 md:col-span-3 min-[1167px]:col-span-2'>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      </section>

      <section className='col-span-5 md:col-span-2 min-[1167px]:col-span-1'>
        <Cart
          cartItems={Object.keys(cart)?.map((key) => ({
            id: key,
            ...products[key],
            quantity: cart[key],
          }))}
        />
      </section>

      <section className='col-span-5 min-[1167px]:col-span-2'>
        <Inventory
          handleAddProduct={handleAddProduct}
          handleEditProduct={handleEditProduct}
          products={products}
          reloadSampleData={loadSampleData}
        />
      </section>
    </main>
  )
}

export default Store
