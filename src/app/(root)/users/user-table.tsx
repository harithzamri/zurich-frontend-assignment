"use client";

import Pagination from "@/app/components/pagination";
import { fetchData } from "@/lib/apiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect, useState } from "react";

export default function UserTable({ currentPage }: { currentPage: number }) {
  const authState = useAppSelector((state) => state.auth.authState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(`https://reqres.in/api/users?page=${currentPage}`));
  }, [dispatch, currentPage]);

  const { data, per_page, page, total, total_pages } = useAppSelector(
    (state) => state.api
  );

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="w-full max-w-4xl">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                First Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Last Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Avatar
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.firstName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.lastName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <EmailCell email={user.email} />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={user.avatar}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-300 px-4 py-2 text-center"
                  colSpan={6}
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        perPage={per_page}
        total={total}
        totalPages={total_pages}
      />
    </div>
  );
}

// EmailCell component that toggles visibility of the email
function EmailCell({ email }: { email: string }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleEmailVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        className="text-blue-500 underline"
        onClick={toggleEmailVisibility}
      >
        {isVisible ? "Hide Email" : "Show Email"}
      </button>
      {isVisible ? (
        <div className="mt-2">{email}</div>
      ) : (
        <div className="mt-2">*******</div>
      )}
    </div>
  );
}
