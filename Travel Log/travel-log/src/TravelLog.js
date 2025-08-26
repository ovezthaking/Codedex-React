import React, { useState } from "react";

export default function TravelLog() {
  
  const [activities, setActivities] = useState([]);
   const [inputData, setInputData] = useState({
     destination: "",
     dates: "",
     groupSize: 0,
     travelPreferences: ""
   });

  function handleActivitiesChange(e) {
    const selectedActivities = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setActivities(selectedActivities);
  }

  function handleInputDataChange(e){
    setInputData({
        ...inputData,
        [e.target.name] : e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();

    setActivities([]);
    setInputData({
     destination: "",
     dates: "",
     groupSize: 0,
     travelPreferences: ""
   });

  }

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination:</label>
        <input type='text' name='destination' id='destination'
            value={inputData.destination} onChange={handleInputDataChange}
        />
        
        <label htmlFor="activities">Activities: </label>
        <select multiple value={activities} name="activities" id="activities"
        onChange={handleActivitiesChange}>
            <option value='biking'>Biking</option>
            <option value='safari'>Safari</option>
            <option value='skiing'>Skiing</option>
            <option value='quads'>Quads</option>
            <option value='boat'>Boat Trip</option>
        </select>

        <label htmlFor="dates">Date:</label>
        <input type="date" name="dates" id="dates"
            value={inputData.dates} onChange={handleInputDataChange}
        />

        <label htmlFor="groupSize">Group Size:</label>
        <input type="number" name="groupSize" id="groupSize"
            value={inputData.groupSize} onChange={handleInputDataChange}
        />

        <label htmlFor="travel-preferences">Thoughts and reflections:</label>
        <textarea name="travelPreferences" id='travel-preferences'
        value={inputData.travelPreferences} onChange={handleInputDataChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
