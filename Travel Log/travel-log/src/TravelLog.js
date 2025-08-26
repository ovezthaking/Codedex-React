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

  // Define handleInputDataChange() here 💖

  // Define handleSubmit() here 💖

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
      <form>
        <label htmlFor="destination">Destination:</label>
        <input type='text' name='destination' id='destination'/>
        
        <label htmlFor="activities">Activities: </label>
        <select name="activities" id="activities">
            <option value='biking'>Biking</option>
            <option value='safari'>Safari</option>
            <option value='skiing'>Skiing</option>
            <option value='quads'>Quads</option>
            <option value='boat'>Boat Trip</option>
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date"/>

        <label htmlFor="groupSize">Group Size:</label>
        <input type="number" name="groupSize" id="groupSize"/>

        <label htmlFor="thoughts">Thoughts and reflections:</label>
        <textarea name="thoughts" id='thoughts'></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
