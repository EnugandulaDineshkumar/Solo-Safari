import './TravelDiaries.css';
import React from 'react';


import Dwaraka from "../../photes/Dwaraka.Destination.JPG"
import Ladakh from "../../photes/Ladakh.Destination.jpg"
import Ayodhya from "../../photes/Ayodhya.Destination.jpg"
import Kedarnath from "../../photes/Kedarnath.Destination.jpg"

const travelData = [
  {
   
    title: 'Ladakh ',
    image: Ladakh,
  },
  {
   
    title: 'Kedarnath ',
    image: Kedarnath,
  },
  {
   
    title: 'Ayodhya ',
    image: Ayodhya,
  },
  {
    
    title: 'Dwaraka ',
    image: Dwaraka,
  },
];

export default function TravelDiaries() {
  return (

    <div className="travel-container">
      <h1 className='Main-heading'>DESTINATION</h1>
      <p className="subtitle">— for every passion —</p>
      
      <div className="cards">
        {travelData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-text">
              <p className="meta"><span>{item.state}</span> {item.type}</p>
              <h2 className="card-heading">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

     
     
    </div>
 
  );
}

