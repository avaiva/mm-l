import React from "react";

const BlurColorHighlight = ({ position, size, filter }) => {
  const highlightStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: "var(--re-frame-highlight-color, #E8FF88)",
    filter: filter,
    position: "absolute",
    ...position,
  };
  return <div className="color-highlight" style={highlightStyle}></div>;
};

export default BlurColorHighlight;
