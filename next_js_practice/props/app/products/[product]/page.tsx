import { log } from 'console'
import React from 'react'

const Product = async ({params}:{params:{product:string}}) => {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const response = await fetchData.json()
    console.log(params);
    
  return (
    <div className='w-[400px] m-auto'>
      <p className='text-[14px] mb-[10px] mt-[20px] text-center'>{response.title}</p>
      <p className='text-[14px] mb-[10px] mt-[20px] text-center'>{response.id}</p>
      <p className='text-[14px] mb-[10px] mt-[20px] text-center'>{response.body}</p>
    </div>
  )
}

export default Product
