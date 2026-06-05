import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../lib/authSchema";
import AuthInput from "../components/auth/AuthInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState({ text: "", type: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(authSchema) });

  const handleFormSubmit = async (data) => {
    setMessage({ text: "", type: "" });
    try {
      const res = await axios.post(
        "https://cura-note-server.onrender.com/api/login",
        data,
        {
          withCredentials: true,
        },
      );
      login(res.data);
      navigate("/Dashboard");
    } catch (error) {
      const status = error.response?.status;
      if (status === 404) {
        setMessage({
          text: "No account found. Please sign up first.",
          type: "error",
        });
      } else if (status === 401) {
        setMessage({ text: "Incorrect password.", type: "error" });
      } else {
        setMessage({
          text: "Network error. Please try again later.",
          type: "error",
        });
      }
    }
  };

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] relative">
      <div className="relative z-10 w-full max-w-md p-8 bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm">
        <h1 className="text-2xl font-light text-zinc-900 mb-8 uppercase tracking-widest">
          Cura Note
        </h1>

        {message.text && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
            {isSubmitting ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2 text-sm">
          <p className="text-zinc-500">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-emerald-600 font-bold">
              Sign Up
            </Link>
          </p>
          <p>
            <Link
              to="/ForgotPassword"
              className="text-zinc-400 hover:text-zinc-600 underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
