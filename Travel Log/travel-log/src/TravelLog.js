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
      {/* Create <form> here 💖 */}
    </div>
  );
}
