import React, { useEffect, useRef } from "react";
import "./Products.css";

const CablesConnectors = () => {
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
      title: "12 Pin Socket Assembly",
      img: "/images/lights5.png",
      desc: "Connector between vehicle and trailer, supplying lighting and control.",
    },
    {
      title: "Jumper Cable (16mm2)",
      img: "/images/lights6.png",
      desc: "Thick 16mm2 jumper cable with copper clamps, used to head start vehicles.",
    },
    {
      title: "12 Pin / Receptacle Cable (SPIRAL TYPE)",
      img: "/images/lights7.png",
      desc: "Spiral cable with 12-pin connector for vehicle-trailer connection.",
    },
    {
      title: "12 Pin / Receptacle Cable (STRAIGHT TYPE)",
      img: "/images/lights9.png",
      desc: "Straight cable with 12-pin connector for direct trailer connection.",
    },
    {
      title: "Jumper Cable (35mm2)",
      img: "/images/lights11.png",
      desc: "Heavy-duty 35mm2 jumper cable with clamps and male switch.",
    },
    {
      title: "Jumper Cable (50mm2)",
      img: "/images/lights10.png",
      desc: "Extra heavy 50mm2 jumper cable for large vehicles.",
    },
    {
      title: "Jumper Socket",
      img: "/images/lights12.png",
      desc: "Socket installed in vehicle battery to allow external jump start.",
    },
    {
      title: "Inspection Lamp",
      img: "/images/lights14.png",
      desc: "Long wired inspection lamp powered directly from vehicle battery.",
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

export default CablesConnectors;
