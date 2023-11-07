"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./globals.css";
import Viewer from "./components/Viewer";

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(null);

  const btnClick = (look) => {
    setButtonClicked(look);
  };

  return (
    <div className="main">
      <h1 className="heading">Snap Viewer</h1>
      <Viewer buttonClicked={buttonClicked} />
      <div className="option-div">
        <button className="btn-outline-heavy" onClick={() => btnClick('messages')}>Message History</button>
        <button className="btn-outline-heavy" onClick={() => btnClick('media')}>Chat Media</button>
        <button className="btn-outline-heavy" onClick={() => btnClick('memories')}>See Memories</button>
      </div>
      <button className="btn-outline-heavy" onClick={() => btnClick()}>Reset</button>
    </div>
  );
}
