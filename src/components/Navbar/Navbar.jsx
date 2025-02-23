import React from "react";
import "./navbar.css";
import Link from "next/link";
import { cookies } from "next/headers";
import Profile from "../Profile-Icon/Profile";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  const isAuthenticated = !!token;

  return (
    <div className="navbar">
      <ul>
        {!isAuthenticated ? (
          <Link href="/signin">
            <li>Sign In</li>
          </Link>
        ) : (
          <li>
            <Profile />
          </li>
        )}
        <Link href="/favourites">
          <li>Favorites</li>
        </Link>
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
