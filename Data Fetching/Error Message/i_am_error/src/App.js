import { useState, useEffect } from "react";

export default function App() {
  const [ error, setError ] = useState(null);

  const errorSrc = 'https://i.giphy.com/4Zvz30OkefpNXT4HDQ.webp';

  useEffect(function () {
    async function fetchData() {
      try {
        // Add more characters to the string in fetch() 💖
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
        );
        if (response.ok === false) {
          throw new Error('fetching failed');
        }
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {(error && (
        <img
          width="300"
          src={
            {
              errorSrc
            }
          }
        />
      )) || (
        <img width="300" src="https://i.giphy.com/ynNF0bU8fB3HsInXEL.webp" />
      )}

      {(error && <h2>{error}</h2>) || (
        <h2>Yay, no errors!</h2>
      )}
    </div>
  );
}
