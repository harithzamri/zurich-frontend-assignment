import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import Layout from "@/app/components/layout";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import UserTable from "./user-table";
import Link from "next/link";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    notFound();
  }

  //https://nextjs.org/docs/messages/sync-dynamic-apis
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;

  // const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
  // const data = await res.json();

  return (
    <Layout>
      <UserTable currentPage={currentPage} />
    </Layout>
  );
}
