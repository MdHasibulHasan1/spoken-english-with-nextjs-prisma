"use client";
import { useState, useEffect, ChangeEvent, useCallback } from "react";
import axios from "axios";
import { User } from "@/types/types";
import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/Loader";

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("name");
  const [order, setOrder] = useState<string>("asc");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [newRole, setNewRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/admin/manage-users", {
        params: { search, sort, order, page, limit },
      });
      const { users, totalUsers } = response.data.payload;
      setUsers(users);
      setTotalUsers(totalUsers);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  }, [search, sort, order, page, limit]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleRoleUpdate = async (id: string, role: string) => {
    try {
      const response = await axios.put("/api/admin/update-role", { id, role });
      if (response.data.success) {
        fetchUsers(); // Refresh the user list after update
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Failed to update role", error);
      alert("Failed to update role");
    } finally {
      setEditingUserId(null);
      setNewRole("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SectionTitle title="Manage Users" />
      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="Search by name or email"
          className="border p-2 rounded flex-1"
        />
        <select
          value={sort}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSort(e.target.value)
          }
          className="border p-2 rounded"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="createdAt">Created At</option>
        </select>
        <select
          value={order}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setOrder(e.target.value)
          }
          className="border p-2 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={limit}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setLimit(Number(e.target.value))
          }
          className="border p-2 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <table className="min-w-full text-left bg-white border border-gray-200">
            <thead className="text-nowrap">
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Email Verified</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Updated At</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    {editingUserId === user.id ? (
                      <select
                        value={newRole}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          setNewRole(e.target.value)
                        }
                        className="border p-2 rounded"
                      >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    ) : (
                      user.role
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {user.emailVerified
                      ? new Date(user.emailVerified).toLocaleDateString()
                      : "Not Verified"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(user?.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(user.updatedAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {editingUserId === user.id ? (
                      <div className="flex flex-col text-sm">
                        <button
                          onClick={() => handleRoleUpdate(user.id, newRole)}
                          className="bg-green-500 text-white rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditingUserId(null);
                            setNewRole("");
                          }}
                          className="bg-red-500 text-white rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingUserId(user.id);
                          setNewRole(user.role);
                        }}
                        className="bg-blue-500 text-white py-1 px-3 rounded"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Previous
            </button>
            <span className="text-lg">Page {page}</span>
            <button
              onClick={() =>
                setPage((prev) => (users.length < limit ? prev : prev + 1))
              }
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
          <div className="mt-2">Total Users: {totalUsers}</div>
        </>
      )}
    </div>
  );
};

export default ManageUsers;
