import React, { useEffect, useState } from "react";
import "./App.css";
import PixelGrid from "./PixelGrid";

const URL = "http://localhost:3000"; // Adjust the URL as needed

const App = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) => console.error("Error fetching grid data:", error));
  }, []);

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      <PixelGrid grid={grid} />
    </div>
  );
};

export default App;
