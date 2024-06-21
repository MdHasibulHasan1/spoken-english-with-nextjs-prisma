"use client";
import { SpokenRule } from "@/types/types";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ManageRules: React.FC = () => {
  const [rules, setRules] = useState<SpokenRule[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [sortField, setSortField] = useState<keyof SpokenRule>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const fetchRules = async () => {
    setLoading(true);
    const response = await fetch(
      `/api/admin/spoken-rules?search=${search}&page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
    );
    const data = await response.json();
    setRules(data.data);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const toastId = toast.loading("Loading...");
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
      toast.dismiss(toastId);
      setRules((prevRules) =>
        prevRules.map((rule) => (rule.id === id ? { ...rule, status } : rule))
      );
    } else {
      toast.error(data.message || "An error occurred.");
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    fetchRules();
  }, [search, page, limit, sortField, sortOrder]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to the first page on new search
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1); // Reset to the first page on limit change
  };

  const handleSort = (field: keyof SpokenRule) => {
    setSortField(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Rules</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded mr-4"
        />
        <select
          value={limit}
          onChange={handleLimitChange}
          className="border p-2 rounded"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {statusMessage && (
            <p className="mb-4 text-green-500">{statusMessage}</p>
          )}
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("id")}
                >
                  ID
                </th>
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("bloggerEmail")}
                >
                  Blogger Email
                </th>
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("category")}
                >
                  Category
                </th>
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("structure")}
                >
                  Structure
                </th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule) => (
                <tr key={rule.id}>
                  <td className="border p-2">{rule.id}</td>
                  <td className="border p-2">{rule.bloggerEmail}</td>
                  <td className="border p-2">{rule.category}</td>
                  <td className="border p-2">{rule.structure}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1 || loading}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages || loading}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRules;
