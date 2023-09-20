import React from 'react';
import './RestaurantMap.css'

const RestaurantMap = () => {
  return (
    <div className='map-container'>
       <h2>Location</h2>
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124441.21414859772!2d77.36572289726563!3d12.921346699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e55a88f92fd%3A0xe077ff6e75f17440!2sBig%20Bite-Veg%20Food%20%26%20Chaat%20Restaurant%20in%20Rajarajeshwari%20Nagar.!5e0!3m2!1sen!2sin!4v1695202333824!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default RestaurantMap;
