import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.tile).map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};
