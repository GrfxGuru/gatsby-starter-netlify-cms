import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/twitter-icon.svg'
import avatar from '../img/avatar.png'
import linkedin from '../img/linkedin-icon.png'

var headerStyle = {
  backgroundColor: 'rgb(116, 0, 2)',
  height: '100px',
  width: '100%',
  backgroundSize: 'cover'
};

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {

     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {

         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);

         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');

       });
     });
   }
 }

  render() {
   return (

       <nav className="navbar" style={headerStyle} role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Avatar">
          <img src={avatar} alt="PeterWitham"/>
          <div>
            <h1 className='siteName'>PeterWitham</h1>
          </div>
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/tags/swift/">
          Swift Programming
        </Link>
        <Link className="navbar-item" to="/tags/jam-stack/">
          JAM Stack
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end has-text-centered">
        <a
            className="navbar-item"
            href="https://www.linkedin.com/in/peterwitham"
            target="_blank"
            rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="LinkedIN" />
          </span>
        </a>
        <a
            className="navbar-item"
            href="https://twitter.com/compileswift"
            target="_blank"
            rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/GrfxGuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
