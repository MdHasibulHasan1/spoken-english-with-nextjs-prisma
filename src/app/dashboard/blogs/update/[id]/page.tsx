"use client";
import React, { useEffect, useState } from "react";
import ChapterEditForm from "../chapterEditForm";
import Loader from "@/components/Loader";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateChapter({ params }: { params: { id: string } }) {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/chapter/${params?.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setChapter(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [params?.id]);
  if (!chapter) {
    return <div>Not found.</div>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error)?.message}</p>;

  const deletePreposition = async () => {
    try {
      const res = await axios.delete(`/api/chapter/${params?.id}`);
      console.log(res);
      toast.success("Chapter deleted successfully.");
      // router.push("/dashboard/preposition/mine");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full">
      <button className="bg-blue-500 p-2 w-full" onClick={deletePreposition}>
        Delete Me
      </button>
      <ChapterEditForm key={params.id} chapter={chapter} />
    </div>
  );
}

export default UpdateChapter;
