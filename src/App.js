import { useEffect } from 'react'
import './App.css'
import { products } from './data/products'
import ProductCard from './components/ProductCard'

function App() {
  useEffect(() => {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [])

  const { title, description, imgUrl, status, price } = products[2]

  return (
    <div className='App'>
      <ProductCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        status={status === 'available'}
        price={price}
      />
    </div>
  )
}

export default App
