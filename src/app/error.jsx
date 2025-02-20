"use client";
import React from "react";

export default function Notfound({ error }) {
  return (
    <div className="error-found-container">
      <div className="error-found-logo">i</div>
      <h3>OOps..</h3>
      <p>Something has happend</p>
      {/* <p>{error}</p> */}
    </div>
  );
}
