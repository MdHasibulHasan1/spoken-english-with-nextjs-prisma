"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PostCard from "@/components/PostCard";

interface SidebarData {
  searchTerm: string;
  sort: string;
  category: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export default function Search() {
  const [sidebarData, setSidebarData] = useState<SidebarData>({
    searchTerm: "",
    sort: "desc",
    category: "preposition",
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTerm = searchParams.get("searchTerm") || "";
    const sort = searchParams.get("sort") || "desc";
    const category = searchParams.get("category") || "preposition";

    setSidebarData({
      searchTerm,
      sort,
      category,
    });

    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm, sort, category }),
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        setShowMore(data.posts.length === 9);
      } else {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setSidebarData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchTerm, sort, category } = sidebarData;
    const query = new URLSearchParams({
      searchTerm,
      sort,
      category,
    }).toString();
    router.push(`/search?${query}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const { searchTerm, sort, category } = sidebarData;
    const res = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchTerm,
        sort,
        category,
        startIndex: numberOfPosts,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              value={sidebarData.sort}
              id="sort"
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="uncategorized">Select a chapter</option>
              <option value="preposition">Preposition</option>
              <option value="tense">Tense</option>
              <option value="conditional sentences">
                Conditional sentences
              </option>
              <option value="articles">Articles</option>
              <option value="adjectives">Adjectives</option>
              <option value="adverbs">Adverbs</option>
              <option value="nouns">Nouns</option>
              <option value="verbs">Verbs</option>
              <option value="pronouns">Pronouns</option>
              <option value="conjunctions">Conjunctions</option>
              <option value="interjections">Interjections</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded"
          >
            Apply Filters
          </button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {!loading &&
            posts.map((post) => <PostCard key={post.id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
