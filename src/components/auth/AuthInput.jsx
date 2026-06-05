// components/auth/AuthInput.jsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthInput({
  label,
  type,
  placeholder,
  register,
  error,
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
        {label}
      </label>
      <div className="relative">
        <input
          {...register}
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-zinc-100 dark:bg-zinc-800 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 outline-none focus:border-emerald-500 transition-all"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">
          {error.message}
        </p>
      )}
    </div>
  );
}
