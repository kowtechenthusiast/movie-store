"use server";

import { cookies } from "next/headers";

export const handleLogout = async () => {
  try {
    const cookieStore = await cookies();
    if (cookieStore.has("token")) {
      cookieStore.delete("token");
      return { message: "Logout successful", status: 200 };
    } else {
      return {
        info: "Your session already expired",
        status: 401,
      };
    }
  } catch (error) {
    console.error("Logout error:", error);
    return { error: "Logout unsuccessful", status: 500 };
  }
};
