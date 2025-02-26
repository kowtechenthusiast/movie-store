"use client";
import React from "react";
import NavItem from "../NavItem/NavItem";
import { usePathname } from "next/navigation";
import "./ribbon.css";
export default function Ribbon() {
  const path = usePathname();

  if (path.endsWith("/signin") || path.endsWith("/signup")) {
    return null;
  }

  return (
    <div className="ribbon">
      <NavItem title="Top Rated" params="top-rated" />
      <NavItem title="Popular" params="popular" />
      <NavItem title="Now Playing " params="now-playing" />
      <NavItem title="Upcoming" params="upcoming" />
    </div>
  );
}
