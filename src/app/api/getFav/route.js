import { connect } from "@/lib/connection/user";
import { default as User } from "@/lib/models/user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const email = body.email;

  try {
    await connect();
    const user = await User.findOne({ email });
    const favourites = user.favourites;
    return NextResponse.json({ favourites: favourites }, { status: 200 });
  } catch (error) {
    console.log("Error in getting favourites", error);
    return NextResponse.json(
      { error: "Error in getting favourites" },
      { status: 500 }
    );
  }
};
