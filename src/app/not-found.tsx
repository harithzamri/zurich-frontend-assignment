"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const { data } = useSession();
  const isAuthenticated = !!data?.user;
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      {isAuthenticated ? (
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for does not exist.
        </p>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            You are not authenticated. Please log in to proceed.
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleLoginRedirect}
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
}
