import React from 'react';
import './Services.css';
import dsa from '../components/dsa.jpg';
import java from '../components/java.png';
import testing from '../components/testing.jpg';

const Services = () => {
  const services = [
    { 
      title: 'Data structures', 
      description: 'I specialize in creating beautiful, responsive, and functional websites using modern technologies like React, Node.js, and MongoDB. Whether it\'s a simple landing page or a complex web application, I can help bring your vision to life.', 
      image: dsa 
    },
    { 
      title: 'Java', 
      description: 'I develop functional and user-friendly mobile applications for both Android and iOS platforms using React Native. My apps are designed to provide a seamless user experience, with a focus on performance and usability.', 
      image: java
    },
    { 
      title: 'Software Testing', 
      description: 'I offer Windows application development services using technologies like C# and .NET. From utility tools to full-fledged desktop applications, I can create robust solutions tailored to your needs.', 
      image: testing
    },
  ];

  return (
    <div className="services">
      <h1>Services I Offer</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
