import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    const slides = [
        {
            image: process.env.PUBLIC_URL + '/background.jpg',
            title: "PRECISION ENGINEERING FOR THE ROAD AND THE FIELD",
            button: "EXPLORE PRODUCTS"
        },
        {
            image: process.env.PUBLIC_URL + '/images/background1.jpg',
            title: "ADVANCED LIGHTING SOLUTIONS FOR EVERY JOURNEY",
            button: "VIEW PRODUCTS"
        },
        {
            image: process.env.PUBLIC_URL + '/banner3.jpg',
            title: "QUALITY & DURABILITY YOU CAN TRUST",
            button: "DISCOVER MORE"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ✅ Hero Banner Carousel */}
            <div 
                className="hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slides[currentIndex].image})`
                }}
            >
                <div>
                    <h1 className="hero-title">
                        {slides[currentIndex].title}
                    </h1>
                    <button className="hero-btn">{slides[currentIndex].button}</button>
                </div>
            </div>

            {/* Product Cards */}
            <div className="big-box-container">
                <div className="dashboard-card">
                    <img src="/images/lights.jpg" alt="Rear Blackout Lights" className="card-image" />
                    <h3> BLACKOUT LIGHTS & ESSENTIAL Add-ONS </h3>
                  
                    <Link to="http://localhost:3000/blackout-essential">
                        <button className="card-button">View More</button>
                    </Link>
                </div>

                <div className="dashboard-card">
                    <img src="/images/lights2.jpg" alt="Convoy Lamp" className="card-image" />
                    <h3>CABLES & CONNECTORS</h3>
                    <Link to="http://localhost:3000/cables-connectors">
                        <button className="card-button">View More</button>
                    </Link>
                </div>
            </div>

            {/* Logo Carousel */}
            <div className="logo-carousel-section">
                <p className="carousel-text">OUR CLIENTS</p>
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
