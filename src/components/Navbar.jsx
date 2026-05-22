function Navbar({ cartCount }) {

  return (

    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "black",
        color: "white"
      }}
    >

      <h2>Shopping Website</h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none"
        }}
      >

        <li>Home</li>
        <li>Products</li>

        <li>
          Cart ({cartCount})
        </li>

      </ul>

    </nav>

  )
}

export default Navbar