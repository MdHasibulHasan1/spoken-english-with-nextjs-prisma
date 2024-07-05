"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { app } from "@/firebase";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";
import Image from "next/image";

interface FormData {
  title?: string;
  category?: string;
  image?: string;
  content?: string;
}

const CreatePost = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUploadProgress, setImageUploadProgress] = useState<number | null>(
    null
  );
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [publishError, setPublishError] = useState<string | null>(null);

  const router = useRouter();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];
  const modules = { toolbar: toolbarOptions };

  const handleUploadImage = async () => {
    if (!file) {
      setImageUploadError("Please select an image");
      return;
    }

    setImageUploadError(null);
    const storage = getStorage(app);
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProgress(progress);
      },
      () => {
        setImageUploadError("Image upload failed");
        setImageUploadProgress(null);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUploadProgress(null);
        setFormData((prevData: FormData) => ({
          ...prevData,
          image: downloadURL,
        }));
      }
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/chapter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError(null);
      router.push(`/chapter/${data.slug}`);
    } catch {
      setPublishError("Something went wrong");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <select
            className="flex-1 p-2 border border-gray-300 rounded"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a chapter</option>
            <option value="preposition">Preposition</option>
            <option value="tense">Tense</option>
            <option value="conditional sentences">Conditional sentences</option>
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
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <input
            type="file"
            accept="image/*"
            className="flex-1"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
          <button
            type="button"
            className="py-2 px-4 bg-blue-500 text-white rounded"
            onClick={handleUploadImage}
            disabled={Boolean(imageUploadProgress)}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress.toFixed(0)}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </button>
        </div>
        {imageUploadError && (
          <div className="text-red-500">{imageUploadError}</div>
        )}
        {formData.image && (
          <div className="relative w-full h-72">
            <Image
              src={formData.image}
              alt="Uploaded image"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          modules={modules}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-purple-500 text-white rounded"
        >
          Publish
        </button>
        {publishError && (
          <div className="mt-5 text-red-500">{publishError}</div>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
