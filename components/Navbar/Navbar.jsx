import React from "react";
import "./navbar.css";
import Link from "next/link";
export default async function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link href={"/signin"}>
          <li>Sign In</li>
        </Link>
        <li>Favorites</li>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
      <Link href="/">
        <div className="app-name">
          <span>Movie</span>
          <span>Store</span>
        </div>
      </Link>
    </div>
  );
}
