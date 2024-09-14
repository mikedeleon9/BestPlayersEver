import React from "react";
import "./components.css";

export default function RankBar() {
  return (
    <div className="w-3/5 h-12 top-0 sticky flex items-center p-4 gap-4 ml-45">
      {/* Individual hover effects applied to each child element */}
      <p className="w-16 px-2 py-1 text-center cursor-pointer hover:rounded-md hover:bg-darkerGray">
        Ranks
      </p>
      <p className="w-16 px-2 py-1 text-center cursor-pointer hover:rounded-md hover:bg-darkerGray">
        15-11
      </p>
      <p className="w-16 px-2 py-1 text-center cursor-pointer hover:rounded-md hover:bg-darkerGray">
        10-6
      </p>
      <p className="w-16 px-2 py-1 text-center cursor-pointer hover:rounded-md hover:bg-darkerGray">
        5-1
      </p>
    </div>
  );
}
