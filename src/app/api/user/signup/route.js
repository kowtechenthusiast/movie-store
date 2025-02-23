import { connect } from "@/lib/connection/user";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connect();

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { errror: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json(
      { error: "User creation successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in user creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
