function ProductCard({ name, price, image }) {

  return (
    <div>
      <img
        src={image}
        alt={name}
        width="200"
      />

      <h2>{name}</h2>

      <p>Price: ₹{price}</p>

      <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard