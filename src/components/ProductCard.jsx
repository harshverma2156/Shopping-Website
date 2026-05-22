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
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}
    >

      <img
        src={image}
        alt={name}
        width="200"
        style={{
          borderRadius: "10px",
          height: "200px",
          objectFit: "cover"
        }}
      />

      <h2>{name}</h2>

      <p>₹{price}</p>

      <button
        onClick={addToCart}
        style={{
          padding: "10px 15px",
          cursor: "pointer"
        }}
      >
        Add To Cart
      </button>

    </div>

  )
}

export default ProductCard