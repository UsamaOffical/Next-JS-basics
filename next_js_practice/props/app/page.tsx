import React from 'react'

import DynamicRoute_page from './products/page'
// import Products from './component/products'

const Home = () => {
  return (
    <div>
      {/* <Products/> */}
      {/* <Props name ='usama' age={23}/>
      <Props name ='Ahmed' age={29}/> */}
      <DynamicRoute_page/>
    </div>
  )
}

export default Home
