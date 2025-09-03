"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Panggil API untuk register user baru
        const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        });

        setLoading(false);
        if (res.ok) {
        // Setelah sukses register, langsung login
        await signIn("credentials", { email, password, callbackUrl: "/" });
        } else {
        alert("Register gagal, coba lagi!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="relative">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-sky-500 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-10 w-96">
            {/* Logo */}
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
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                    placeholder="Masukan Nama"
                />
                </div>
                <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                    placeholder="Masukan Email"
                />
                </div>
                <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                    placeholder="Masukan Password"
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

            {/* Switch ke Login */}
            <p className="text-center text-sm mt-4">
                Sudah punya akun?{" "}
                <Link href="/auth/login" className="text-cyan-600 hover:underline">
                Login di sini
                </Link>
            </p>

            {/* Google Register Button */}
            <div className="mt-4 flex justify-center">
                <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-colors"
                >
                <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill="#EA4335"
                    d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.9 2.2 30.4 0 24 0 14.6 0 6.2 5.4 2.5 13.4l7.9 6.1C12 13.2 17.5 9.5 24 9.5z"
                    />
                    <path
                    fill="#4285F4"
                    d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9.1h12.5c-.5 2.8-2 5.1-4.1 6.6l6.3 4.9c3.7-3.4 5.9-8.4 5.9-15.9z"
                    />
                    <path
                    fill="#FBBC05"
                    d="M10.4 28.4c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-7.9-6.1C.9 16.8 0 20.3 0 24s.9 7.2 2.5 10.5l7.9-6.1z"
                    />
                    <path
                    fill="#34A853"
                    d="M24 48c6.5 0 12-2.1 16-5.8l-6.3-4.9c-2 1.3-4.6 2-7.4 2-6.5 0-12-4.4-13.9-10.5l-7.9 6.1C6.2 42.6 14.6 48 24 48z"
                    />
                </svg>
                Continue with Google
                </button>
            </div>

            {/* Tombol kembali ke Home */}
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
