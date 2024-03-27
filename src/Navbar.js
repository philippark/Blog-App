import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>DATABASE by ChessBase</h1>
            <div className = "links">
                <Link to="/" style = {{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}>Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;