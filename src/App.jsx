import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"

function App() {

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

  return (
    <div>

      <Navbar />

      <h1>Our Products</h1>

      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))
      }

    </div>
  )
}

export default App