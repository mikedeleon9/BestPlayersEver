import React, { useState } from "react";

export default function RankBar() {
  // State to track which element is active (clicked)
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to update the active index on click
  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index when clicked
  };

  return (
    <div className="w-3/5 h-12 top-0 sticky flex items-center p-4 gap-4 ml-45">
      {["Ranks", "15-11", "10-6", "5-1"].map((label, index) => (
        <p
          key={index}
          onClick={() => handleClick(index)} // Set the active element on click
          className={`w-16 px-2 py-1 text-center cursor-pointer  hover:bg-darkerGray ${
            activeIndex === index ? "border-b-4 border-blue-500" : ""
          }`}
        >
          {label}
        </p>
      ))}
    </div>
  );
}
