"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function Errorfound({ reset }) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="overlay">
      <div className="error-found-container">
        <div className="error-found-logo">i</div>
        <h3>OOps..</h3>
        <p>Something has happend</p>
        <button
          type="button"
          className="refresh-button"
          onClick={() => reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
