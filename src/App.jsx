import ProductCard from "./components/ProductCard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <h1>Our Product</h1>

      <ProductCard
      name="Nike Shoes"
      price="2,999"
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      />

       <ProductCard
        name="Smart Watch"
        price="4999"
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      />

      <ProductCard
        name="Headphones"
        price="1999"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      />
    </div>
  )
}

export default App