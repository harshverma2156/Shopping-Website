function ProductCard(props) {

  return (
    <div>
      <img
        src={props.image}
        alt={props.name}
        width="200"
      />

      <h2>{props.name}</h2>

      <p>Price: ₹{props.price}</p>

      <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard