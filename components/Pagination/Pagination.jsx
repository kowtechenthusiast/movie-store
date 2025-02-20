"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import "./pagination.css";

export default function Pagination() {
  const router = useRouter();
  const path = usePathname();
  const [page, setPage] = useState(parseInt(path.split("/")[2]) || 1);

  const handleNext = () => {
    setPage((prev) => prev + 1);
    router.push(`/${path.split("/")[1]}/${page + 1}`);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      router.push(`/${path.split("/")[1]}/${page - 1}`);
    }
  };
  if (path.split("/")[1] === "search") {
    return null;
  }
  return (
    <div className="pagination-container">
      {page > 1 && (
        <button className="btn prev" onClick={handlePrev}>
          ← Previous
        </button>
      )}
      <button className="btn next" onClick={handleNext}>
        Next →
      </button>
    </div>
  );
}
