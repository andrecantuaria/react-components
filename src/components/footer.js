import React from 'react';
function Footer() {
    return (
        <footer className="footer container flexbox">
            <div className="footer-logo">
                <a href="./index.html">
                    <div className="logo-container">
                        <h1>Artistry</h1>
                    </div>
                </a>
            </div>
            <div className="footer-info">
                <p>2024 - All rights reserved. <a href="/terms">Terms of Use</a></p>
            </div>
        </footer>
    );
}

export default Footer;
