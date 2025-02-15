"use client"

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const sendPrompt = async () => {
    try {
      const res = await fetch("/api/ollama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Response data: ", data);
      setOutput(data.response);

    } catch (error) {
      console.error("Failed to fetch data:", error);
      setOutput("Failed to fetch data. Please try again.");

    }
  };

  return (
    <div id="main" className="flex flex-col min-h-screen">
      <header className="flex justify-center p-4">
        <h1 id="title" className="text-2xl font-bold">
          Sid's Program
        </h1>
      </header>
      <main id="program" className="flex flex-col items-center justify-center flex-grow">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-black mb-4 p-2 border rounded"
        />
        <button
          onClick={sendPrompt}
          style={{ background: "white", color: "black", marginBottom: "10px", marginTop: "10px" }}
        >
          Submit
        </button>
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black">
          {output}
        </div>
      </main>
    </div>
  );
}
