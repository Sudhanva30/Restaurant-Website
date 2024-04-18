import React from 'react';
import Menupic from '../assets/images/veg menu.jpg'; // Replace with the actual path to your menu.jpg image
import './Menu.css'; // Import the CSS file


const Menu = () => {
  return (
    <div className="menu-container">
         <h1 className="menu-title">Menu</h1> 
      <img
        src={Menupic} // Assign the imported image to the src attribute
        alt="Menu"
        className="menu-image"
      />
    </div>
  );
};

export default Menu;
