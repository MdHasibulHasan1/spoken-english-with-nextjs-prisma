"use client";
import Loader from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import { Rule } from "@/types/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ManageRules: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0); // New state for total records
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchRules = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/admin/spoken-rules?search=${search}&page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
      );
      const data = await response.json();
      if (data.success) {
        setRules(data.data);
        setTotalPages(data.totalPages);
        setTotalRecords(data.totalRecords); // Set total records
      } else {
        setError(data.message || "Failed to fetch rules.");
      }
    } catch (error) {
      setError("An error occurred while fetching the rules.");
    } finally {
      setLoading(false);
    }
  };

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
        // Update the status locally to avoid fetching again
        setRules(
          rules.map((rule) => (rule.id === id ? { ...rule, status } : rule))
        );
      } else {
        toast.error(data.message || "An error occurred.");
      }
    } catch (error) {
      toast.error("Failed to update status.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchRules();
    }, 500); // Debounce time in milliseconds

    return () => clearTimeout(debounceFetch);
  }, [search, page, limit, sortField, sortOrder]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to the first page on new search
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1); // Reset to the first page on limit change
  };

  const handleSortChange = (field: string) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="bg-gray-100">
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
            <span> {totalRecords} items found</span>
            {search && (
              <div>
                <span>for</span>
                <span className="text-purple-500"> {search}</span>
              </div>
            )}
          </div>
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
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1 || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageRules;
