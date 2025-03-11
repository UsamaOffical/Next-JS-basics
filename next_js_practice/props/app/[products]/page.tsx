import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div >
                <Image src="/all-product/product_1.png" alt='product image' width={250} height={250} />
                <div>
                    <p>$20</p>
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    )
}

export default Page
