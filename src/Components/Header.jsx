import { Link } from 'react-router-dom';
import Nav from './UI/Nav';

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark-test px-sm-1 px-md-2 px-lg-3"
    >
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img
            className="logo"
            src='./src/Assets/images/BCS_Logo_White_nobackground.png'
            alt="Black Cat Solutions Logo"
          />
          <b>Matt Tingley</b></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
            <Nav 
                links={[
                    <Link key={1} className="nav-link" to="/">About Me</Link>,
                    <Link key={2} className="nav-link" to="/portfolio">Portfolio</Link>,
                    <Link key={3} className="nav-link" to="/contact">Contact Me</Link>,
                    <Link key={4} className="nav-link" to="/resume">Resume</Link>,
                ]}/>
        </div>
    </nav>
    );
}

export default Header;