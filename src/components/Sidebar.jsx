import { useEffect, useRef } from "react"

function Sidebar({ cartItems }) {


  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  )

  const bottomRef = useRef(null)
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

                <p>₹{item.price}</p>

              </div>

            ))

          )
        }

       
        <div ref={bottomRef}></div>

      </div>

     
      <div
        style={{
          marginBottom: "30px",
          borderTop: "1px solid gray",
          paddingTop: "15px"
        }}
      >

        <h2>
          Total: ₹{totalAmount}
        </h2>

      </div>

    </div>

  )
}

export default Sidebar