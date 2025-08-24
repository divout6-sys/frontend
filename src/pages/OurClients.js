import React, { useEffect } from 'react';
import './OurClients.css';

const OurClients = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.stagger-animate');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 300); // 300ms delay between each item
    });
  }, []);

  return (
    <section className="client-section">
      <h2 className="stagger-animate">OUR VALUED CUSTOMERS</h2>
      <p className="stagger-animate">
        Our customers are at the heart of everything we do. We are dedicated to
        understanding their unique needs and delivering tailored solutions that
        exceed expectations. By building strong, long-term partnerships, we strive
        to create value, trust, and mutual success. Their satisfaction is our
        ultimate priority, driving us to innovate and maintain the highest standards
        of quality and reliability.
      </p>
      <img src="/images/vigo.png" alt="icon1" className="client-image stagger-animate" />
      <img src="/images/Companies1.png" alt="icon1" className="client-image stagger-animate" />
      <img src="/images/Companies2.png" alt="icon1" className="client-image stagger-animate" />
    </section>
  );
};

export default OurClients;
