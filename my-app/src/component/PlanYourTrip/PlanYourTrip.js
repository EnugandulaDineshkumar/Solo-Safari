import React, { useState } from 'react';
import "./PlanYourTrip.css"
// Ensure your path is correct (e.g., ../../photos/planyourtrip.png)
import BikeTripImage from "../../photes/planyourtrip.png"; 

// Using a custom component for clean JSX
const InputField = ({ type = 'text', value, onChange, placeholder, required = false, icon, label }) => (
    // The icon is now correctly placed outside the input, styled by CSS
    <div className="input-group-next-level">
        {label && <label className="input-label-next-level">{label}</label>}
        <div className="input-field-wrapper-next-level">
            {/* The icon now acts as a visual prefix */}
            <span className="input-icon-next-level">{icon}</span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="next-level-input"
            />
        </div>
    </div>
);


const PlanYourTripNextLevel = () => {
    const [tripType, setTripType] = useState('solo');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [notes, setNotes] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleTripTypeChange = (type) => {
        setTripType(type);
        if (type === 'solo') setReturnDate('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true); // Indicate submission attempt

        // Simple validation check (can be expanded)
        if (!origin || !destination || !departDate || (tripType === 'group' && !returnDate)) {
            alert("Please fill in all required fields.");
            setFormSubmitted(false);
            return;
        }

        const tripDetails = {
            tripType,
            origin,
            destination,
            departDate,
            returnDate: tripType === 'group' ? returnDate : null,
            notes,
        };
        
        console.log('Bike Trip Details:', tripDetails);
        
        // Simulate API call success/failure here.
        setTimeout(() => {
            alert('Ride Plan Secured! Check console for details.');
            localStorage.setItem('bikeTripData', JSON.stringify(tripDetails));
            setFormSubmitted(false); // Reset button state
            // Optionally clear form fields here
        }, 1200); // Increased timeout for better visual feedback of loading
    };


    return (
        <div className="next-level-container">
            <div className="next-level-trip-card">
                
                {/* Image Section - Designed to complement the dark theme */}
                <div className="card-section image-section-next-level">
                  
                    {/* The image is now a subtle background element */}
                    <img src={BikeTripImage} alt="Cyclist on a mountain road" className="trip-image-next-level" />
                </div>

                {/* Form Section */}
                <div className="card-section form-section-next-level">
                    <h1 className="card-title-next-level">Plan Your Trip</h1>
                    <p className="subtitle-next-level">Define the parameters of your next journey.</p>

                    <div className="trip-type-toggle-next-level">
                        {['solo', 'group'].map((type) => (
                            <button
                                key={type}
                                className={`toggle-button ${tripType === type ? 'selected-next-level' : ''}`}
                                onClick={() => handleTripTypeChange(type)}
                            >
                                {type === 'solo' ? '👤 Solo Expedition' : '👥 Group Rally'}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="trip-form-next-level">
                        
                        <InputField
                            icon="📍"
                            placeholder="Starting Point (City/Address)"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            required={true}
                            label="Origin"
                        />
                        
                        <InputField
                            icon="🏁"
                            placeholder="Final Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required={true}
                            label="Destination"
                        />
                        
                        <div className="date-fields">
                            <InputField
                                type="date"
                                label="Departure Date"
                                value={departDate}
                                onChange={(e) => setDepartDate(e.target.value)}
                                required={true}
                            />

                            {tripType === 'group' && (
                                <InputField
                                    type="date"
                                    label="Return Date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    required={true}
                                />
                            )}
                        </div>

                        <div className="input-group-next-level">
                            <label className="input-label-next-level">Notes & Stops</label>
                            <div className="input-field-wrapper-next-level">
                                {/* Textarea gets full width, no icon needed */}
                                <textarea
                                    rows="3"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Gear checklist, planned stops, route detours..."
                                    className="next-level-textarea"
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-button-next-level ${formSubmitted ? 'submitting' : ''}`}
                            disabled={formSubmitted}
                        >
                            {formSubmitted ? (
                                <>
                                    <span className="spinner"></span> Securing Route...
                                </>
                            ) : (
                                'Plan My Adventure!'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
   
export default PlanYourTripNextLevel;