import React, { useEffect, useRef } from "react";
import "./Products.css";

const ProductSection = () => {
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
      title: "Front Marker Lamp",
      img: "/images/lights0.png",
      desc: "Front marker lights are typically mounted below or to the side of the vehicle's normal headlights. They help make the vehicle visible to oncoming drivers or indicate a vehicle is following.",
    },
    {
      title: "Rear Blackout Lights",
      img: "/images/lights.jpg",
      desc: "Rear marker lights or blackout taillights are typically housed in the same unit as the vehicles taillights, and are the main tool in keeping the proper following distance in nighttime convoy driving.",
    },
    {
      title: "Convoy Lamp",
      img: "/images/lights2.jpg",
      desc: "Convoy Lamps are mounted on the driver's side of the vehicle, typically on the fender. They give off a diffused beam of white light that replaces regular headlights when driving under blackout conditions.",
    },
    {
      title: "Map Reading Light",
      img: "/images/lights3.png",
      desc: "Map reading light is installed on the passenger side dashboard or inside the glove compartment. It is used for reading maps with sufficient light.",
    },
    {
      title: "Blackout Tail Light Assembly",
      img: "/images/lights8.PNG",
      desc: "This is a military-style vehicle tail light assembly, commonly used in heavy-duty vehicles, military trucks, or off-road applications.",
    },
    {
      title: "Submachine Gun Holders",
      img: "/images/lights4.PNG",
      desc: "As the name suggests, SMG Rack is used to hold guns while the vehicle is in movement. It comprises two parts: Rack Top & Rack Bottom.",
    },
    {
      title: "12 Pin Socket Assembly",
      img: "/images/lights5.png",
      desc: "An electrical connector between vehicle and trailer, supplying automotive lighting and controlling the trailer.",
    },
    {
      title: "Jumper Cable (16mm2)",
      img: "/images/lights6.PNG",
      desc: "A jumper cable with thick electrical cable size 16mm2 and copper clamps. Used to head start a car or another vehicle.",
    },
    {
      title: "12 Pin / Receptacle Cable (SPIRAL TYPE)",
      img: "/images/lights7.PNG",
      desc: "A spiral cable with a receptacle at one end and 12 pin at the other end, used to connect the trailer with the vehicle.",
    },
    {
      title: "12 Pin / Receptacle Cable (STRAIGHT TYPE)",
      img: "/images/lights9.PNG",
      desc: "A straight cable with a receptacle at one end and 12 pin at the other end, used to connect the trailer with the vehicle.",
    },
    {
      title: "Jumper Cable (35mm2)",
      img: "/images/lights11.PNG",
      desc: "A 3 or 5 meter jumper cable, size 35mm2, with clamps at one end and male switch at the other, for heavy-duty vehicles.",
    },
    {
      title: "Jumper Cable (50mm2)",
      img: "/images/lights10.PNG",
      desc: "A jumper cable size 50mm2 with clamps at one end and male switch at the other, used for heavy duty vehicles.",
    },
    {
      title: "Jumper Socket",
      img: "/images/lights12.PNG",
      desc: "A jumper lead socket attached to the vehicle’s battery, used to jump start the vehicle.",
    },
    {
      title: "Inspection Lamp",
      img: "/images/lights14.PNG",
      desc: "A long wired lamp with battery clamps at each end. Can be directly connected to a battery for working in dark.",
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

export default ProductSection;
