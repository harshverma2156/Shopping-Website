import { useEffect, useRef } from "react"

function Sidebar({
  cartItems,
  increaseQuantity,
  decreaseQuantity
}) {

  // TOTAL AMOUNT
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  // AUTO SCROLL REF
  const bottomRef = useRef(null)

  // AUTO SCROLL
  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [cartItems])

  return (

    <div
      style={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
        padding: "20px",
        position: "fixed",
        right: "0",
        top: "0",
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/* TOP SECTION */}
      <div
        style={{
          textAlign: "center"
        }}
      >

        <img
          src="/src/assets/cart.png"
          alt="cart"
          width="80"
        />

        <h2>My Cart</h2>

      </div>

      <hr />

      {/* PRODUCTS */}
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          paddingRight: "10px"
        }}
      >

        {
          cartItems.length === 0 ? (

            <p>Cart is Empty</p>

          ) : (

            cartItems.map((item) => (

              <div
                key={item.id}
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid gray",
                  paddingBottom: "10px"
                }}
              >

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <p>
                  Total:
                  ₹{item.price * item.quantity}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px"
                  }}
                >

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            ))

          )
        }

        {/* AUTO SCROLL TARGET */}
        <div ref={bottomRef}></div>

      </div>

      {/* FIXED TOTAL */}
      <div
        style={{
          marginBottom: "30px",
          borderTop: "1px solid gray",
          paddingTop: "15px"
        }}
      >

        <h2>
          Total Amount: ₹{totalAmount}
        </h2>

      </div>

    </div>

  )
}

export default Sidebar