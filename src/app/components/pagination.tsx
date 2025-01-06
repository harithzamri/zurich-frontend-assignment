import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
  total: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  perPage,
  total,
}) => {
  return (
    <div>
      <div className="flex justify-center gap-2">
        {currentPage > 1 ? (
          <Link
            href={`?page=${currentPage - 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Previous
          </Link>
        ) : (
          <button
            disabled
            className="px-4 py-2 border rounded opacity-50 cursor-not-allowed"
          >
            Previous
          </button>
        )}

        <span className="py-2 px-4">
          Page {currentPage} of {totalPages}
        </span>

        {currentPage < totalPages ? (
          <Link
            href={`?page=${currentPage + 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Next
          </Link>
        ) : (
          <button
            disabled
            className="px-4 py-2 border rounded opacity-50 cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>

      <div className="text-center text-sm text-gray-500">
        Showing {perPage} users per page. Total users: {total}
      </div>
    </div>
  );
};

export default Pagination;
