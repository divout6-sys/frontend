import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    const heroStyle = {
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 50px',
        color: 'white',
    };

    return (
        <>
            {/* Hero Section */}
            <div style={heroStyle} className="hero-section">
                <div>
                    <h1 className="hero-title">
                        PRECISION ENGINEERING FOR THE ROAD AND THE FIELD
                    </h1>
                    <Link to="/products">
                     <button className="hero-btn">EXPLORE PRODUCTS</button>
                    </Link>
                </div>
            </div>

            {/* Product Cards */}
            <div className="big-box-container">
                <div className="dashboard-card">
                    <img src="/images/lights.jpg" alt="Rear Blackout Lights" className="card-image" />
                    <h3> BLACKOUT LIGHTS & ESSENTIAL Add-ONS </h3>
                    <p>
                        {/* Rear marker lights or blackout taillights are typically housed in the same unit
                        as the vehicle's taillights, and are the main tool in keeping the proper following
                        distance in nighttime convoy driving. */}
                    </p>
                    <Link to="/products">
                     <button className="card-button">View More</button>
                     </Link>
                </div>

                <div className="dashboard-card">
                    <img src="/images/lights2.jpg" alt="Convoy Lamp" className="card-image" />
                    <h3>CABLES & CONNECTORS</h3>
                    <p>
                        Convoy Lamps are mounted on the driver's side of the vehicle, typically on
                        the fender. They give off a diffused beam of white light that takes the place
                        of regular headlights when driving under blackout conditions. It is intended
                        to give off just enough light for the driver to make their way.
                    </p>
                    <Link to="/products">
                    <button className="card-button">View More</button>
                     </Link>
                </div>
            </div>

            {/* Logo Carousel */}
            <div className="logo-carousel-section">
                <p className="carousel-text">Join 500+ companies already growing</p>
                <div className="logo-carousel">
                    <div className="logo-track">
                        <img src="/images/Toyota.png" alt="Toyota" />
                        <img src="/images/Orient.png" alt="Orient" />
                        <img src="/images/Nissan.png" alt="Nissan" />
                        <img src="/images/New Holland.png" alt="New Holland" />
                        <img src="/images/Mercedes.png" alt="Mercedes" />
                        <img src="/images/Ghandara.png" alt="Ghandara" />

                        <img src="/images/Master.png" alt="Master" />
                        <img src="/images/Man.png" alt="Man" />
                        <img src="/images/Isuzu.png" alt="Isuzu" />
                        <img src="/images/Hino.png" alt="Hino" />
                        <img src="/images/Al-Ghazi.png" alt="Al-Ghazi" />
                        <img src="/images/Futtaim.png" alt="Futtaim" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
