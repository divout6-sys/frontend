import './Home.css';

function Home() {
    const heroStyle = {
        height: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        color: 'white'
    };

    return (
        <>
            {/* Hero Section */}
            <div style={heroStyle}>
                <div>
                    <h1>PRECISION ENGINEERING FOR THE ROAD AND THE FIELD</h1>
                    <button>EXPLORE PRODUCTS</button>
                </div>
            </div>

            {/* Product Cards */}
            <div className="big-box-container">
                <div className="dashboard-card">
                    <img src="/images/lights.jpg" alt="icon1" className="card-image" />
                    <h3>Rear Blackout Lights </h3>
                    <p>
                        Rear marker lights or blackout taillights are typically housed in the same unit
                        as the vehicle's taillights, and are the main tool in keeping the proper following
                        distance in nighttime convoy driving.
                    </p>
                    <button className="card-button">Import Now</button>
                </div>

                <div className="dashboard-card">
                    <img src="/images/lights2.jpg" alt="icon2" className="card-image" />
                    <h3>Convoy Lamp</h3>
                    <p>
                        Convoy Lamps are mounted on the driver's side of the vehicle, typically on
                        the fender. They give off a diffused beam of white light that takes the place
                        of regular headlights when driving under blackout conditions. It is intended
                        to give off just enough light for the driver to make their way.
                    </p>
                    <button className="card-button">View Report</button>
                </div>
            </div>

            {/* Logo Carousel */}
            <div className="logo-carousel-section">
                <p className="carousel-text">Join 500+ companies already growing</p>
                <div className="logo-carousel">
                    <div className="logo-track">
                        {/* First set */}
                        <img src="/images/Toyota.png" alt="Toyota" />
                        <img src="/images/Orient.png" alt="Orient" />
                        <img src="/images/Nissan.png" alt="Nissan" />
                        <img src="/images/New Holland.png" alt="New Holland" />
                        <img src="/images/Mercedes.png" alt="Mercedes" />
                        <img src="/images/Ghandara.png" alt="Ghandara" />
                        {/* Second set */}
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
