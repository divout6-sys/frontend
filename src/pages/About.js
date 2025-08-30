import React, { useEffect } from "react";
import "./About.css";

function About() {
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

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero scroll-animate card">
        <h1>
           <span className="highlight">Triangle Automobile</span>
        </h1>
        <p>
          since 1994
        </p>
      </section>

      {/* Image Section */}
      <section className="about-image scroll-animate card">
        <img src="/images/image.jpg" alt="Team working together" />
      </section>

      {/* Company Overview */}
      <section className="about-section scroll-animate card">
        <h2>Company Overview</h2>
        <p>
          Triangle Automobile & Engineering Company, established in 1994, is a
          leading manufacturer of sheet metal components, cables & wires, and
          plastic components, primarily catering to the automotive industry.
          With over 28 years of expertise, TAEC has earned a reputation as a
          trusted supplier of NATO-standard components, specializing in products
          for military and army vehicles.
        </p>
        <p>
          The company has successfully delivered parts for over 15,000 vehicles,
          partnering with renowned automotive brands such as Toyota Indus Motor,
          HinoPak Motor, Master Motor, Nissan Ghandhara Industries, and more.
          TAEC remains committed to innovation and excellence, consistently
          investing in capacity enhancement and meeting evolving customer
          requirements for high-quality and customized products.
        </p>

        <p>
          Triangle Automobile & Engineering Company (TAEC) specializes in the
          manufacturing of:
        </p>
        <ul>
          <li>Sheet Metal Components</li>
          <li>Rubber Parts</li>
          <li>Plastic & ABS Parts</li>
        </ul>
        <p>TAEC has a comprehensive manufacturing setup covering the following areas:</p>
        <ul>
          <li>Machining</li>
          <li>Fabrication</li>
          <li>Sheet Metal</li>
          <li>Forging</li>
        </ul>
        <p>
          We operate a well-equipped jobbing industry with a wide range of machines,
          equipment, and tools that enable the production of both standardized and
          customized products. Our facility allows us to handle all processes
          required for the production of customised products. With skilled personnel
          and advanced machinery, we ensure every product meets strict quality
          standards.
        </p>
      </section>

      {/* Our Commitment */}
      <section className="about-section scroll-animate card">
        <h2>Our Commitment to Excellence</h2>
        <h3>Guiding Principles</h3>
        <ul>
          <li>
            <strong>Customer-Centric Approach:</strong> We prioritize
            understanding and exceeding the expectations of our clients.
          </li>
          <li>
            <strong>Innovation and Growth:</strong> We embrace advanced
            technologies and continuously improve our processes to remain at the
            forefront of the industry.
          </li>
          <li>
            <strong>Sustainability:</strong> We are dedicated to environmentally
            responsible practices that ensure long-term value creation.
          </li>
          <li>
            <strong>Excellence in Execution:</strong> We strive for perfection
            in every product and service we deliver.
          </li>
        </ul>
      </section>

      {/* Who We Are */}
      <section className="about-section scroll-animate card">
        <h2>Who We Are & What We Stand For</h2>
        <p>
          We are a trusted leader in manufacturing high-quality automotive and
          defense components, committed to innovation, excellence, and
          sustainability. At TAEC, we stand for integrity, customer
          satisfaction, and a dedication to shaping the future of the
          engineering and automotive industries through reliable and innovative
          solutions.
        </p>
      </section>
    </div>
  );
}

export default About;
