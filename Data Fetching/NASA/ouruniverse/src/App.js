import React, { useState, useEffect } from "react";

export default function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(function () {
    async function fetchAPOD() {
      const response = await fetch({
        /* Add url here 💖 */
      });
      const data = await response.json();
      setApodData(data);
    }
    fetchAPOD();
  }, []);

  // Conditional rendering to avoid accessing properties of null
  return (
    <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <h1>NASA Astronomy Picture of the Day (APOD)</h1>
      {apodData && (
        <div>
          <h3>{apodData.title}</h3>
          <img
            src={apodData.url}
            alt={apodData.title}
            style={{ maxWidth: "75%" }}
          />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
}
