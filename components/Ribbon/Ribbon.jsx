"use client";
import React from "react";
import NavItem from "../NavItem/NavItem";
import { usePathname } from "next/navigation";
export default function Ribbon() {
  const ribbon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    fontSize: "1.5rem",
    marginTop: "40px",
  };
  const path = usePathname();

  if (path.endsWith("/signin") || path.endsWith("/signup")) {
    return null;
  }

  return (
    <div style={ribbon}>
      <NavItem title="Top Rated" params="top-rated" />
      <NavItem title="Popular" params="popular" />
      <NavItem title="Now Playing " params="now-playing" />
      <NavItem title="Upcoming" params="upcoming" />
    </div>
  );
}
