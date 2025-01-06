"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-xl font-bold cursor-pointer"
        >
          User Management
        </h1>

        {status === "loading" ? (
          <p>Loading...</p>
        ) : session ? (
          <button
            onClick={() => signOut()}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
