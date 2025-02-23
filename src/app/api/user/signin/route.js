import { connect } from "@/lib/connection/user";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connect();

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid password. Please try again" },
        {
          status: 400,
        }
      );
    }

    const tokenData = {
      id: user._id,
      email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    console.log("Token stored: ", cookieStore.get("token").value);

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error in user login:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
