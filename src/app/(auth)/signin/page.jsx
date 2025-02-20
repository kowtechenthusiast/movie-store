"use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "../auth.css"; // Import CSS file
import { useState } from "react";

export default function SignIn() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>

        <form className="signin-form">
          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={isShow ? "text" : "password"}
                placeholder="Enter your password"
                required
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

          {/* Submit Button */}
          <button type="submit" className="signin-button">
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
