 import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import "./Home.css";

const images = [
  { url: "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/12/30091139/solo-bike-riding-tips-_-Cover-30-12-22.jpg", text: "Adventure Awaits" },
  { url: "https://i.ytimg.com/vi/yWX9v8Zr45o/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLABvgmRQWq4hMg5Z7hAz3M3qpZdyQ", text: "Create Boldly" },
  { url: "https://bulletstrings.com/wp-content/uploads/2023/01/Is-solo-motorcycle-touring-the-best-Advantages-vs-Disadvantages.png", text: "Find Your Peak" },
  { url: "https://thedreamridersgroup.com/pages/og/2025-07-23-6880997e885b6.webp", text: "Explore Deeply" },
  { url: "https://footloosedev.com/wp-content/uploads/2017/09/motorbiking-expedition.jpg", text: "Breathe Nature" },
  { url: "https://thedreamridersgroup.com/gallery/slider/15/Hanle,Ladakh.jpg", text: "Light Your Path" },
  { url: "https://www.extremetoursindia.com/wp-content/uploads/2014/07/Manali-Ladakh-Motorcycle-Tour.jpg", text: "Ride the Horizon" },
  { url: "https://k2kexpeditions.com/wp-content/uploads/2021/04/home-travel2-places-pic3.jpg", text: "Cross New Limits" }
];

const Home = () => {
  const [background, setBackground] = useState(images[0]);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${background.url})`,
      }}
    >
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="title">Adventure Awaits </h1>
          <p className="subtitle">
            

            Explore the freedom of riding alone. Curated solo trips with scenic routes,
            thrilling experiences, and total freedom to ride your way.
          </p>
          <button className="cta-button">Plan Your Solo Trip</button>
        </div>
      </div>

      <Carousel images={images} onSelect={setBackground} />
    </div>
  );
};

export default Home;
