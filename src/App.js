import {useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product';
import { PAGE_SIZE } from './constants';
import PaginatioinContainer from './components/PaginatioinContainer';

function App() {
  const [products,setProducts]=useState([])
  const [currentPage,setCurrentPage]=useState(0)

  const fetchProducts=async()=>{
    const res=await fetch("https://dummyjson.com/products?limit=500")
    const data=await res.json()
    console.log(data)
    setProducts(data.products)
  }
  useEffect(()=>{ 
    fetchProducts()
  },[])
  
  const handleNextPage=()=>{
    setCurrentPage((currentPage)=>currentPage+1)
  }

  const handlePrevPage=()=>{
    setCurrentPage((currentPage)=>currentPage-1)
  }

  const handlePageChange=(page)=>{
    setCurrentPage(page)
  }
  const totalPages=Math.ceil(products.length/PAGE_SIZE)

  const start=currentPage*PAGE_SIZE
  const end=start+PAGE_SIZE

  return products.length>0? (
    <div className='products'>
      <h1>Products Listing</h1>
      <div className='product-container'>
      {
        products.slice(start,end).map((product)=>(
          <Product key={product.id} image={product.thumbnail} title={product.title}/>
        ))
      }
      </div>
      <PaginatioinContainer currentPage={currentPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handlePageChange={handlePageChange} totalPages={totalPages}/>
    </div>
    
  ):
  (
    <>
      <h2>Products not found </h2>
    </>
  )

}

export default App;
