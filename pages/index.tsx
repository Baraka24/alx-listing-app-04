import React from 'react';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';
import { HERO_BACKGROUND_IMAGE, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from '@/constants';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Find your favorite place here!</h1>
            <p className="hero-subtitle">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          {FILTER_LABELS.map((label, index) => (
            <Pill key={index} label={label} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="listing-section">
        <div className="listing-container">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Card key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;