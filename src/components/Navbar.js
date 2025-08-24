import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/clients">OUR CLIENTS</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
