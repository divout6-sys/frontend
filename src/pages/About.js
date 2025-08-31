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
<<<<<<< HEAD
          <span className="highlight">TRIANGLE AUTOMOBILE & ENGINEERING COMPANY</span>
=======
          <span className="highlight">
            TRIANGLE AUTOMOBILE & ENGINEERING COMPANY
          </span>
>>>>>>> 4164bb1 (about us)
        </h1>
        <p className="since">Since 1994</p>
      </section>

      {/* Image Section */}
      <section className="about-image scroll-animate card">
        <img src="/images/image.jpg" alt="Team working together" />
      </section>

      {/* Company Overview */}
      <section className="about-section scroll-animate card">
        <h2>Company Overview</h2>
        <p>
          <strong>Triangle Automobile & Engineering Company</strong>(TAEC), established in 1994, is a
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
          TAEC specializes in the
          manufacturing of:
        </p>
        <ul>
          <li>Sheet Metal Components</li>
          <li>Rubber Parts</li>
          <li>Plastic & ABS Parts</li>
        </ul>
        <p>
          TAEC has a comprehensive manufacturing setup covering the following
          areas:
        </p>
        <ul>
          <li>Machining</li>
          <li>Fabrication</li>
          <li>Sheet Metal</li>
          <li>Forging</li>
        </ul>
      </section>

      {/* Our Commitment */}
      <section className="about-section scroll-animate card">
        <h2>Our Commitment to Excellence</h2>
<<<<<<< HEAD
=======
       
>>>>>>> 4164bb1 (about us)
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
    </div>
  );
}

export default About;
