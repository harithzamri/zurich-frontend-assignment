import Link from "next/link";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <Link href="/users">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">
            Go to User Page
          </button>
        </Link>
      </div>
    </Layout>
  );
}
