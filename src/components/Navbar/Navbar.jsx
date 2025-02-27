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
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        ) : (
          <li>
            <Profile />
          </li>
        )}
        <li>
          <Link href="/favourites">Favorites</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
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
