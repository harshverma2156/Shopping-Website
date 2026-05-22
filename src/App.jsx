import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"

function App() {

  // STATE
  const [cartCount, setCartCount] = useState(0)

  // PRODUCTS ARRAY
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 3,
      name: "Laptop",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
  ]

  // FUNCTION
  function addToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <div>

      <Navbar cartCount={cartCount} />

      <h1 style={{ textAlign: "center" }}>
        Our Products
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />

          ))
        }

      </div>

    </div>
  )
}

export default App