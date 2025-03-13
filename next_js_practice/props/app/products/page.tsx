import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DynamicRoute_page = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await fetchData.json()
    console.log(response);
    
  return (
    <div>
    
        {
            response.map((item:any,i:string)=>{
                return(
                    <p key={i}>
                        <Link href={`/products/${item.id}`}>{item.title}</Link>
                    </p>
                )
            })
        }
      
    </div>
  )
}

export default DynamicRoute_page
