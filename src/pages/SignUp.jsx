import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../lib/authSchema";
import AuthInput from "../components/auth/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api";

export default function SignUp() {
  const navigate = useNavigate();
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message.text]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const handleSignUp = async (data) => {
    setMessage({ text: "", type: "" });
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Success case
        setMessage({
          text: "Account created! Redirecting...",
          type: "success",
        });
        setTimeout(() => navigate("/Login"), 1500);
      } else {
        if (response.status === 409) {
          setMessage({
            text: "Account already exists. Please sign in.",
            type: "error",
          });
        } else {
          setMessage({
            text: result.message || "Signup failed.",
            type: "error",
          });
        }
      }
    } catch (error) {
      setMessage({ text: "Unable to connect to the server.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] relative">
      <div className="relative z-10 w-full max-w-md p-8 bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm">
        <h1 className="text-2xl font-light text-zinc-900 mb-8 uppercase tracking-widest">
          Create Account
        </h1>

        {message.text && (
          <div
            className={`mb-4 p-3 text-sm rounded-lg border ${
              message.type === "success"
                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                : "bg-red-50 text-red-600 border-red-100"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <AuthInput
            label="Full Name"
            type="text"
            placeholder="Jane Doe"
            register={register("fullName")}
            error={errors.fullName}
          />
          <AuthInput
            label="Email"
            type="email"
            placeholder="name@example.com"
            register={register("email")}
            error={errors.email}
          />
          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
            register={register("password")}
            error={errors.password}
          />

          <button
            disabled={isSubmitting}
            className="w-full py-3 bg-zinc-900 text-white rounded-xl"
          >
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Already have an account?{" "}
          <Link to="/Login" className="text-emerald-600 font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
