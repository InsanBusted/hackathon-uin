"use client";

import { useState } from "react";
import { createAuthClient } from "better-auth/react";
import { MagicCard } from "@/components/ui/magic-card";

const authClient = createAuthClient();

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      alert(result.error.message);
    } else {
      alert("Login success!");
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-neutral-950 to-neutral-900 text-neutral-100 p-6">
      <MagicCard>
        <div className="p-8 w-80 sm:w-96 text-center space-y-6">
          <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
          <p className="text-neutral-400 text-sm">Please sign in to continue</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition-all cursor-pointer"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </MagicCard>
    </div>
  );
}
