function Navbar({ cartCount }) {
    return( 
        <nav>
            <h2>Sopping Website</h2>

            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Cart ({cartCount})</li>
            </ul>
        </nav>
    )
}

export default Navbar