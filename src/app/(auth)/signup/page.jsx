"use client";
import Link from "next/link";
import "../auth.css"; // Import CSS file

export default function SignUp() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign Up</h2>

        <form className="signin-form">
          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {/* Submit Button */}
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <p className="signup-link">
          Already have an account? <Link href="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
