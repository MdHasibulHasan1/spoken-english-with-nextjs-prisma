"use client";
import Loader from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";

interface Rule {
  id: string;
  category: string;
  structure: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

const ManageRules: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  // Fetching the rules based on search input and pagination
  const fetchRules = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/admin/spoken-rules?search=${search}&page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
      );

      // Log the request URL for debugging
      console.log("API URL: ", response.url);

      const data = await response.json();
      console.log("Fetched rules data: ", data); // Logging response for debugging

      if (data.success) {
        setRules(data.data);
        setTotalPages(data.totalPages);
        setTotalRecords(data.totalRecords);
      } else {
        setError(data.message || "Failed to fetch rules.");
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setError("An error occurred while fetching the rules.");
    } finally {
      setLoading(false);
    }
  }, [search, page, limit, sortField, sortOrder]);

  // Trigger the API call after the user finishes typing (debouncing)
  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchRules();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [fetchRules]);

  // Update rule status
  const updateStatus = async (id: string, status: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await fetch(`/api/admin/spoken-rules/manage-status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setRules((prevRules) =>
          prevRules.map((rule) => (rule.id === id ? { ...rule, status } : rule))
        );
      } else {
        toast.error(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Update status error: ", error);
      toast.error("Failed to update status.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to the first page when a new search starts
  };

  // Handle items per page limit change
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1);
  };

  // Handle sorting change
  const handleSortChange = (field: string) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="bg-gray-100 p-4">
      <SectionTitle title="Manage Rules" />
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
        />
        <select
          value={limit}
          onChange={handleLimitChange}
          className="border p-2 rounded-lg mb-4 md:mb-0 md:mr-4"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <>
          <div className="mb-4 text-lg font-bold flex gap-1">
            <span>{totalRecords} items found</span>
            {search && (
              <div>
                <span>for</span>
                <span className="text-purple-500"> {search}</span>
              </div>
            )}
          </div>

          {/* Table rendering */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-nowrap">
                  <th
                    className="border p-2 cursor-pointer"
                    onClick={() => handleSortChange("id")}
                  >
                    ID {sortField === "id" && (sortOrder === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="border p-2 cursor-pointer"
                    onClick={() => handleSortChange("category")}
                  >
                    Category{" "}
                    {sortField === "category" &&
                      (sortOrder === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="border p-2 cursor-pointer"
                    onClick={() => handleSortChange("structure")}
                  >
                    Structure{" "}
                    {sortField === "structure" &&
                      (sortOrder === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="border p-2 cursor-pointer"
                    onClick={() => handleSortChange("createdAt")}
                  >
                    Created At
                    {sortField === "createdAt" &&
                      (sortOrder === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="border p-2 cursor-pointer"
                    onClick={() => handleSortChange("updatedAt")}
                  >
                    Updated At{" "}
                    {sortField === "updatedAt" &&
                      (sortOrder === "asc" ? "▲" : "▼")}
                  </th>
                  <th className="border p-2">Actions</th>
                  <th className="border p-2">Update</th>
                </tr>
              </thead>
              <tbody>
                {/* {rules.length > 0 ? ( */}
                {rules.map((rule: Rule) => (
                  <tr key={rule.id} className="hover:bg-gray-100">
                    <td className="border p-2">{rule.id}</td>
                    <td className="border p-2">{rule.category}</td>
                    <td className="border p-2">{rule.structure}</td>
                    <td className="border p-2">
                      {new Date(rule.createdAt).toLocaleString()}
                    </td>
                    <td className="border p-2">
                      {new Date(rule.updatedAt).toLocaleString()}
                    </td>
                    <td className="border p-2">
                      <select
                        value={rule.status}
                        onChange={(e) => updateStatus(rule.id, e.target.value)}
                        className="border p-1 rounded"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Denied">Denied</option>
                      </select>
                    </td>
                    <td className="border p-2">
                      <Link href={`/dashboard/spoken-rules/update/${rule?.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                          Update Data
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || loading}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages || loading}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageRules;
