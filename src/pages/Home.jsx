import React, { useContext } from 'react'
import Product from '../components/Product';
import {ProductContext} from '../contexts/ProductContext'
import Hero from '../components/Hero';
const Home = () => {
  const {products} = useContext(ProductContext);
  

  const filteredProducts = products.filter((item)=>{
    return (item.category==="men's clothing" ||item.category==="women's clothing"||item.category==="jewelery"|| item.category==="electronics");
  })
  console.log(filteredProducts);
  return (

   
    <div>
    <Hero />
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {
            filteredProducts.map(product=>{
              return <Product key={product.id} product={product}/>
            })
          }
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home