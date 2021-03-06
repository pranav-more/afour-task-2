import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Task 2</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/limited">Get limited</Link>
        <Link to="/jewelery">Get jewelery</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Product</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;