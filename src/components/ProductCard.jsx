function ProductCard({ name, price, image, addToCart }) {

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "220px"
      }}
    >

      <img
        src={image}
        alt={name}
        width="200"
      />

      <h2>{name}</h2>

      <p>₹{price}</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>

    </div>
  )
}

export default ProductCard