"use client";
import React, { useTransition } from "react";
import { FaUser } from "react-icons/fa";
import "./profile.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleLogout } from "@/lib/actions/user";

export default function Profile() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const logout = () => {
    startTransition(async () => {
      try {
        const response = await handleLogout();
        if (response.status === 200) {
          toast.success(response.message);
          router.refresh();
        } else if (response.status === 401) {
          toast.info(response.info);
          router.refresh();
        } else {
          toast.error(response.error);
          console.error("Logout failed");
        }
      } catch (error) {
        console.error("Error during logout", error);
      }
    });
  };
  return (
    <div className="profile">
      <FaUser className="user-icon" />
      <button className="logout-box" onClick={logout} disabled={isPending}>
        Logout
      </button>
    </div>
  );
}
