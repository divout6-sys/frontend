import React, { useEffect, useRef } from "react";
import "./Products.css";

const BlackoutEssential = () => {
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      title: "FRONT MARKER LAMP",
      img: "/images/lights0.png",
      desc: "Front marker lights are mounted below or to the side of headlights to help make vehicles visible to oncoming drivers.",
    },
    {
      title: "REAR BLACKOUT LIGHTS",
      img: "/images/lights.jpg",
      desc: "Rear blackout taillights help maintain proper following distance during night convoy driving.",
    },
    {
      title: "CONVOY LAMP",
      img: "/images/lights2.jpg",
      desc: "Mounted on the driver’s side fender, convoy lamps emit diffused white light for blackout conditions.",
    },
    {
      title: "MAP READING LIGHT",
      img: "/images/lights3.png",
      desc: "Installed on the passenger side dashboard, used for reading maps with sufficient light.",
    },
    {
      title: "BLACKOUT TAIL LIGHT ASSEMBLY",
      img: "/images/lights8.png",
      desc: "Military-style blackout tail light assembly for heavy-duty and military trucks.",
    },
    {
      title: "SUBMACHINE GUN HOLDERS",
      img: "/images/lights4.png",
      desc: "SMG Rack holds guns securely while the vehicle is moving. Comes with rack top and bottom parts.",
    },
  ];

  return (
    <>
      {products.map((product, index) => (
        <div
          className="product-container"
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
        >
          <h2 className="product-heading">{product.title}</h2>
          <div className="product-content">
            <div className="product-image">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product-description">
              <p>
                <b>{product.desc}</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlackoutEssential;
