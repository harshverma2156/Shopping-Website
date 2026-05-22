function Navbar({ cartCount }) {

  return (

    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "100"
      }}
    >

      <h2>Shopping Website</h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: "0"
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