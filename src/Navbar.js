const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>DATABASE by ChessBase</h1>
            <div className = "links">
                <a href="/" style = {{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}>Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;