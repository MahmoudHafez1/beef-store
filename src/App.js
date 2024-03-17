import { useEffect, useState } from 'react'
import './App.css'
import { products as productsData } from './data/products'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState({})
  const [cart, setCart] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(productsData))
      setProducts(productsData)
    } else {
      setProducts(JSON.parse(localStorage.getItem('products')))
    }
  }, [])

  const handleAddToCart = (productId) => {}

  console.log('prod', products)
  console.log('cart', cart)

  return (
    <div className='App'>
      <ProductList products={products} />
    </div>
  )
}

export default App
