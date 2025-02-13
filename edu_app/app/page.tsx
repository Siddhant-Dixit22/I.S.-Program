"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleClick}
        style={{ background: "white", color: "black", marginBottom: "10px"}}
      >
        Click me! {count}
      </button>
      <button
        onClick={resetClick}
        style={{ background: "red", color: "white"}}
      >
        Reset
      </button>
    </div>
  );
}
