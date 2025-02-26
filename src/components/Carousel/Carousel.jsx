"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card/Card";
import "../Home/home.css";

export default function Carousel({ data, genres, title }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showSeeAll, setShowSeeAll] = useState(false);

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  const updateScrollButtons = () => {
    const container = containerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
      setShowSeeAll(
        container.scrollLeft + container.clientWidth >= container.scrollWidth
      );
    }
  };

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth || 300;
      const scrollAmount = cardWidth * 3;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(updateScrollButtons, 500);
    }
  };

  return (
    <div className="carousel-wrapper">
      {canScrollLeft && (
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          {"<"}
        </button>
      )}
      <div
        className="card-container-home"
        ref={containerRef}
        onScroll={updateScrollButtons}
      >
        {data.results.map((movie) => {
          const genreNames = movie.genre_ids?.map(
            (id) => genres.find((item) => item.id === id)?.name || "Unknown"
          );

          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <Card {...movie} genre={genreNames} />
            </Link>
          );
        })}
        <Link href={`/${title}/1`}>
          <span className="see-all">See all</span>
        </Link>
      </div>

      {canScrollRight && (
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          {">"}
        </button>
      )}
    </div>
  );
}
