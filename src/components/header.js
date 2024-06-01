import React from 'react';
function Header() {

    return (

        <div className="container flexbox">
               
        <div>
            <h1>
            <a  href="./index.html">
                <div className="logo-container-header">
                 <h1>Artistry</h1>
                </div>
            </a>
            </h1>
        </div>
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Log In</a></li> 
                <li><a href="#">Sign Up</a></li> 
            </ul>
        </nav>
    </div>

    );

}

export default Header;