import React, { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition as default };
