"use server";

import { connect } from "../connection/user";
import User from "../models/user";

export const handleAddFav = async (id, email) => {
  try {
    await connect();
    const user = await User.findOne({ email });

    user.favourites.push(id);
    await user.save();
    return { message: "Added to favourite", status: 200 };
  } catch (error) {
    console.error("MongoDB insert error:", error);
    return { error: "Failed to add item", status: 500 };
  }
};

export const handleRemoveFav = async (id, email) => {
  try {
    await connect();
    const user = await User.findOne({ email });

    user.favourites = user.favourites.filter((movieId) => movieId != id);
    await user.save();
    return { message: "Removed from favourite", status: 200 };
  } catch (error) {
    console.error("MongoDB insert error:", error);
    return { error: "Failed to add item", status: 500 };
  }
};
