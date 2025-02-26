"use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "../auth.css"; // Import CSS file
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = async (prevData, formData) => {
    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful");

        router.push("/");
        router.refresh("/");
      } else {
        toast.error(data.error || "Login failed. Please try again");
        console.log("Login failed. Please try again", data?.error);
      }
    } catch (error) {
      console.log("Error in sending user data", error);
      toast.error("Network error. Please try again.");
    }
  };
  const [isShow, setShow] = useState(false);
  const [state, formAction, isPending] = useActionState(
    handleSignIn,
    undefined
  );
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>

        <form className="signin-form" action={formAction}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={isShow ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <button
                className="toggle-password"
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                {isShow ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="signin-button" disabled={isPending}>
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <p className="signup-link">
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
