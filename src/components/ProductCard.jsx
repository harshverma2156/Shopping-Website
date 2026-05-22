function ProductCard({
  name,
  price,
  image,
  addToCart
}) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "220px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >

      <img
        src={image}
        alt={name}
        width="200"
        style={{
          borderRadius: "10px"
        }}
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