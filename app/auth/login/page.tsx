"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        // Redirect setelah login sukses
        router.push("/admin/dashboard");
      } else {
        alert(data.message || "Login gagal. Periksa email dan password.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-sky-500 rounded-2xl transform rotate-6"></div>
        <div className="relative bg-white rounded-2xl shadow-lg p-10 w-96">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
              placeholder="Masukan Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
              placeholder="Masukan Password"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="text-cyan-600 hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
