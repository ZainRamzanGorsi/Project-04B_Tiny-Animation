import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";

export default function App() {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(220px,0)" },
      { transform: "translate(220px,120px)" },
      { transform: "translate(420px,120px)" },
      { transform: "translate(420px,270px)" },
      { transform: "translate(630px,270px)" },
      { transform: "translate(630px,420px)" },
      { transform: "translate(810px,420px)" },
      { transform: "translate(810px,580px)" },
      { transform: "translate(1200px,580px)" },
    ],

    timing: {
      duration: 6000, // Run for 1000ms
      iterations: Infinity,
    },
  });

  return (
    <div>
      <div className="container" ref={ref}></div>
      <div className="line"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
  );
}
