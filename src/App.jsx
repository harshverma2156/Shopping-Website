import { useState } from "react"

import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Sidebar from "./components/Sidebar"

function App() {

  // CART STATE
  const [cartItems, setCartItems] = useState([])

  // PRODUCTS
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

    {
      id: 4,
      name: "Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    

  ]

  // ADD TO CART
  function addToCart(product) {

    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    )

    // IF PRODUCT ALREADY EXISTS
    if (existingProduct) {

      const updatedCart = cartItems.map((item) => {

        if (item.id === product.id) {

          return {
            ...item,
            quantity: item.quantity + 1
          }

        }

        return item
      })

      setCartItems(updatedCart)

    }

    // NEW PRODUCT
    else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ])

    }

  }

  // INCREASE QUANTITY
  function increaseQuantity(id) {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          quantity: item.quantity + 1
        }

      }

      return item
    })

    setCartItems(updatedCart)

  }

  // DECREASE QUANTITY
  function decreaseQuantity(id) {

    const updatedCart = cartItems
      .map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity: item.quantity - 1
          }

        }

        return item
      })

      .filter((item) => item.quantity > 0)

    setCartItems(updatedCart)

  }

  return (

    <div>

      <Navbar cartCount={cartItems.length} />

      <Sidebar
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <h1
        style={{
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        Our Products
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginRight: "320px",
          padding: "20px"
        }}
      >

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}

              addToCart={() =>
                addToCart(product)
              }
            />

          ))
        }

      </div>

    </div>

  )
}

export default App