"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        alert(data.error || "Registrasi gagal, coba lagi!");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Terjadi kesalahan koneksi ke server!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-sky-500 rounded-2xl transform rotate-6"></div>
        <div className="relative bg-white rounded-2xl shadow-lg p-10 w-96">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukan Nama Lengkap"
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukan Email"
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan Password"
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Sudah punya akun?{" "}
            <Link href="/auth/login" className="text-cyan-600 hover:underline">
              Login di sini
            </Link>
          </p>

          <div className="mt-4 text-center">
            <button
              onClick={() => router.push("/")}
              className="text-gray-600 hover:underline text-sm"
            >
              ← Kembali ke Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
