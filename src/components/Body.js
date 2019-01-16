import React from "react";
import "../styles/Body.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
<div>
<ul className="nav justify-content-center fixed-top">
  <li className="nav-item">
    <h3>Clicky Game </h3>
  </li>
  <li className="nav-item">
  <p> You Guessed!</p>
  </li>
  <li className="nav-item">
  <p> Score: | Top Score: </p>
  </li>
</ul>

<header>
  <div className="header-text">
<h1>Clicky Game!</h1>
<h4>Click on an image to earn points, but don't click on any more than once!</h4>
</div>
</header>

</div>
  );
}



export default Navbar;
