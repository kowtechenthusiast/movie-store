"use client";

import React from "react";
import "./favbutton.css";
import { handleAddFav, handleRemoveFav } from "@/lib/actions/add-fav";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function FavButton({ id, email, isFav }) {
  const router = useRouter();
  const addToFavourite = async () => {
    const response = await handleAddFav(id, email);
    if (response.status === 200) {
      toast.info(response.message);
      router.refresh();
    }
  };
  const removeFavourite = async () => {
    const response = await handleRemoveFav(id, email);
    if (response.status === 200) {
      toast.info(response.message);
      router.refresh();
    }
  };
  return (
    <div className="fav-block">
      {isFav ? (
        <button onClick={removeFavourite} className="favourite remove">
          Remove Favourite
        </button>
      ) : (
        <button onClick={addToFavourite} className="favourite add">
          Add Favourite
        </button>
      )}
    </div>
  );
}
