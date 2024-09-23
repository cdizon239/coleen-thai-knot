import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the location icon

const Details = () => {
  return (
    <section className="details-container">
      {/* Title for mobile view */}
      <div className="details-highlight details-highlight-mobile">
          <p className="highlight-text">"Every moment led us here, falling into place, just as it was meant to be."</p>
      </div>

      {/* Image container */}
      <div className="details-image-container">
        <img src="walking.jpg" alt="Walking" className="details-image" />
      </div>

      <div className="details-content">
        {/* Highlighted "falling into place" quote for added theme emphasis */}
        <div className="details-highlight details-highlight-desktop">
          <p className="highlight-text">"Every moment led us here, falling into place, just as it was meant to be."</p>
        </div>
        
        {/* Title for desktop view */}
        <h2 className="details-title-desktop">Details at a Glance</h2>
        
        {/* Introductory message */}
        <p className='italic'>
          This day celebrates the beautiful journey that brought us together, one piece at a time. As we take this next step, we’re grateful for every moment that guided us here.
        </p>        
        <br/>
        <p className='italic'>Your presence is the final piece that will make our day truly complete!</p>
        
        {/* Event details section */}
        <div className="details-info">
          <h2>The Day's Events</h2>
          
          <h3>DRESS CODE</h3>
          <p>Cocktail attire</p>
          
          <h3>CEREMONY</h3>
          <p>4:15 PM</p>
          <p>
            <FaMapMarkerAlt className="location-icon" /> 
            <a href="https://maps.app.goo.gl/XXEZ8TrXMVTPz4eS7" target="_blank" rel="noopener noreferrer">
              Boston Public Garden
            </a>
          </p>
          <p>Boston, MA 02116</p>
          
          <h3>COCKTAIL HOUR</h3>
          <p>6:00 PM</p>
          <p>
            <FaMapMarkerAlt className="location-icon" /> 
            <a href="https://maps.app.goo.gl/bf3NizcSoSdKukFe8" target="_blank" rel="noopener noreferrer">
              Miscela
            </a>
          </p>
          <p>485 Foley St, Somerville, MA 02145</p>
          
          <h3>DINNER</h3>
          <p>7:30 PM</p>
          <p>
            <FaMapMarkerAlt className="location-icon" /> 
            <a href="https://maps.app.goo.gl/MGFYiEU4KuMNxU618" target="_blank" rel="noopener noreferrer">
              Baldwin Bar at Sichuan Garden
            </a>
          </p>
          <p>2 Alfred St, Woburn, MA 01801</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
