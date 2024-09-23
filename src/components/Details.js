import React from 'react';

const Details = () => {
  return (
    <section className="details-container">
      {/* Title for mobile view */}
      <h2 className="details-title-mobile">Details</h2>
      
      <div className="details-image-container">
        <img src="walking.jpg" alt="Walking" className="details-image" />
      </div>

      <div className="details-content">
        {/* Title for desktop view */}
        <h2 className="details-title-desktop">Details</h2>
        <p className='italic'>We’re thrilled to have our dear family and friends join us in celebrating this love.</p>
        <p className='italic'>Your presence is all we need!</p>
        
        <div className="details-info">
          <h2>DRESS CODE</h2>
          <p>Cocktail attire</p>
          
          <h2>CEREMONY</h2>
          <p>4:15pm</p>
          <p>Boston Public Garden</p>
          <p>Boston, MA 02116</p>
          
          <h2>COCKTAIL HOUR</h2>
          <p>6pm</p>
          <p>Miscela</p>
          <p>485 Foley St Somerville, MA 02145</p>
          
          <h2>DINNER</h2>
          <p>7:30pm</p>
          <p>Baldwin Bar at Sichuan Garden</p>
          <p>2 Alfred St, Woburn, MA 01801</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
