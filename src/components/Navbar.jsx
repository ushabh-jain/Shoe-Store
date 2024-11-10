const Navbar = () =>{
    return(
        <nav className="container">
        <div className="Logo">
            <img src="/images/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
            <li>Menu</li> {/* Properly closed the 'li' tag */}
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Login</button> {/* Removed the period after 'Login' */}
    </nav>

    );
};

export default Navbar;