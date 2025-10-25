import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./InstructionsCarousel.css";

import BikeInspection from "../../photes/Bike Inspection (T-CLOCS).png";
import GearUpforSafety from "../../photes/Gear Up for Safety.png";
import NavigationTools from "../../photes/Navigation Tools.jpg";
import RideDefensively from "../../photes/Ride Defensively.jpg";
import CarryLegalDocuments from "../../photes/Carry Legal Documents.png";
import PostRideCare from "../../photes/Post-Ride Care.png";
import FuelManagement from "../../photes/Fuel Management.png";
import SmartRoutePlanning from "../../photes/Smart Route Planning.png";
import WeatherReady from "../../photes/Weather Ready.jpg";
import PackEssentials from "../../photes/Pack Essentials.jpg";
import StayHealthyHydrate from "../../photes/Stay Healthy & Hydrated.jpeg";
import Solotripriding from "../../photes/solo-bike-riding-tips.jpg";

const teamMembers = [
  { title: "Bike Inspection (T-CLOCS)", img: BikeInspection, desc: "Inspect your bike using the T-CLOCS checklist — tires, controls, lights, oil, chassis, stands. Confidence starts with preparation." },
  { title: "Gear Up for Safety", img: GearUpforSafety, desc: "Wear a DOT-approved helmet and full gear. Visibility and protection save lives — always ride ready." },
  { title: "Smart Route Planning", img: SmartRoutePlanning, desc: "Plan fuel stops and routes ahead. Check weather, road conditions, and share your plan. Smart planning equals smooth rides." },
  { title: "Ride Defensively", img: RideDefensively, desc: "Anticipate others, use mirrors, signal early, and avoid blind spots. Control the ride, not the chaos." },
  { title: "Solo Riding Tips", img: Solotripriding, desc: "Know your limits, rest often, and stay connected. Freedom rides best with awareness and discipline." },
  { title: "Pack Essentials", img: PackEssentials, desc: "Pack light but smart — rain gear, snacks, hydration, and tools. Simplicity empowers endurance." },
  { title: "Fuel Management", img: FuelManagement, desc: "Know your bike’s range and fuel stops. Avoid empty tanks — momentum is everything." },
  { title: "Weather Ready", img: WeatherReady, desc: "Adapt gear to weather. Layers, gloves, and waterproofs define resilience." },
  { title: "Navigation Tools", img: NavigationTools, desc: "Use GPS and maps smartly. Preparation prevents detours — confidence is direction." },
  { title: "Carry Legal Documents", img: CarryLegalDocuments, desc: "Ride with license, insurance, and confidence. Legality ensures freedom on roads." },
  { title: "Stay Healthy & Hydrated", img: StayHealthyHydrate, desc: "Stretch, hydrate, and fuel your body. Endurance is built off the bike too." },
  { title: "Post-Ride Care", img: PostRideCare, desc: "Clean, inspect, and rest. Every great ride ends with maintenance — for both rider and machine." },
];

const CARDS_TO_SHOW = 4;

const InstructionsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextCard = () => setCurrent((prev) => (prev + 1) % teamMembers.length);
  const prevCard = () =>
    setCurrent((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );

  const visibleCards = teamMembers
    .slice(current, current + CARDS_TO_SHOW)
    .concat(
      current + CARDS_TO_SHOW > teamMembers.length
        ? teamMembers.slice(0, (current + CARDS_TO_SHOW) % teamMembers.length)
        : []
    );

  return (
    <div className="carousel-main">
      <h2 className="travel-Main-headings">TRIP CHECKLIST</h2>

      <div className="carousel-inner">
        <button className="nav-btn left" onClick={prevCard}>
          <MdKeyboardDoubleArrowLeft />
        </button>

        <div className="carousel-cards">
          {visibleCards.map((card, i) => (
            <div className="carousel-card" key={i}>
              <div className="image-wrapper">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={nextCard}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default InstructionsCarousel;
