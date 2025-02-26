"use client";
import Link from "next/link";
import "../auth.css"; // Import CSS file
import { useActionState } from "react";
import { useRouter } from "next/navigation";
// import { handleSignUp } from "@/lib/actions/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const router = useRouter();
  const handleSignUp = async (prevData, formData) => {
    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("User created successfully");

        router.push("/signin");
      } else {
        toast.error(data.error || "User creation failed. Please try again");
        console.log("User creation failed. Please try again", data?.error);
      }
    } catch (error) {
      console.log("Error in sending user data", error);
      toast.error("Network error. Please try again.");
    }
  };

  const [state, formAction, isPending] = useActionState(
    handleSignUp,
    undefined
  );
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign Up</h2>

        <form className="signin-form" action={formAction}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <button type="submit" className="signin-button" disabled={isPending}>
            Sign In
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <Link href="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
