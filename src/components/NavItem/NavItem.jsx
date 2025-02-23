"use client";
import Link from "next/link";
import React from "react";
import "./navitem.css";
import { usePathname } from "next/navigation";

export default function NavItem({ params, title }) {
  const genre = usePathname().split("/")[1];
  return (
    <Link href={`/${params}/1`}>
      <div className={params == genre ? "nav-item" : ""}>{title}</div>
    </Link>
  );
}
