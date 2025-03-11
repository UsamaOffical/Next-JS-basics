import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div className=''>
      {/* div main */}
      <div className=" flex justify-between">
        <Link href={'products'}>
        <div >
            <Image src="/all-product/product_1.png" alt='product image' width={250} height={250}/>
            <div>
                <p>$20</p>
                <p>Add to cart</p>
            </div>
        </div>
        </Link>
        <div >
            <Image src="/all-product/product_1.png" alt='product image' width={250} height={250}/>
            <div>
                <p>$20</p>
                <p>Add to cart</p>
            </div>
        </div>
        <div >
            <Image src="/all-product/product_1.png" alt='product image' width={250} height={250}/>
            <div>
                <p>$20</p>
                <p>Add to cart</p>
            </div>
        </div>
        <div >
            <Image src="/all-product/product_1.png" alt='product image' width={250} height={250}/>
            <div>
                <p>$20</p>
                <p>Add to cart</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
