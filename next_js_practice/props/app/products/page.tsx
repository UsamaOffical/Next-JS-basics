
import Link from 'next/link'
import React from 'react'

const DynamicRoute_page = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await fetchData.json()
    return (
        <div>          
            <ul>
                {
                    data.map((item: any, i: string) => {
                        return(
                            <li key={i}><Link href={`products/${item.id}`}>{item.title}</Link></li>
                        ) 
                    })
                }
            </ul>
        </div>
    )
}

export default DynamicRoute_page
