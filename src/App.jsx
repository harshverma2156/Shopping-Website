// import ProductCard from "./components/ProductCard"
// 

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Our Product</h1>

//       <ProductCard
//       name="Nike Shoes"
//       price="2,999"
//       image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
//       />

//        <ProductCard
//         name="Smart Watch"
//         price="4999"
//         image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
//       />

//       <ProductCard
//         name="Headphones"
//         price="1999"
//         image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
//       />
//     </div>
//   )
// }

// export default App

import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"

function App() {
  const [cartCount, setCartCount] = useState(0)

  function addToCart() {
    setCartCount(cartCount + 1)
  }

  return(
    <div>
     <navbar cartCount={cartCount} />

     <h1>Our Products</h1>

     <ProductCard
     name="Nike SHoes"
     price="2,999"
     image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
     addToCart={addToCart}
     />

       <ProductCard
        name="Smart Watch"
        price="4999"
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        addToCart={addToCart}
      />

    </div>
  )
}

export default App