const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" srcset="" />
      </div>
      <ul className="nav-menu">
        <li ahref="#">Menu</li>
        <li ahref="#">Location</li>
        <li ahref="#">About</li>
        <li ahref="#">Contact Us</li>
      </ul>
      <a href="#"><button className="nav-btn-login">Login</button></a>
    </nav>
  );
};

export default Navigation;
