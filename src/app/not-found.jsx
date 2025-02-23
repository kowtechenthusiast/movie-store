"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function Notfound() {
  return (
    <div className="overlay">
      <div className="not-found-container">
        <div className="not-found-logo">i</div>
        <h3>404</h3>
        <p>Page not found</p>
        <button
          type="button"
          className="home-button"
          onClick={() => redirect("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
}
