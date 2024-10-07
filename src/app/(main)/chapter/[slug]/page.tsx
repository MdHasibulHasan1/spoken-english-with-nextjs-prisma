import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import React from "react";
// Define the type for params
interface Params {
  slug: string;
}
async function Chapter({ params }: { params: Params }) {
  const chapterSlug = params.slug;

  try {
    const chapter = await prisma.chapter.findUnique({
      where: { slug: chapterSlug },
    });

    if (!chapter) {
      return (
        <div className="text-red-500 text-center mt-4">Chapter not found.</div>
      );
    }

    const { category, slug, title, content, image, createdAt, updatedAt } =
      chapter;

    // Function to format date as "Month Day, Year"
    const formatDate = (dateString: any) => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="font-semibold  text-center uppercase text-green-500">
            <span>{category}</span>
          </div>
          <div className="p-6">
            <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <h4 className="text-center mb-3 font-bold flex gap-4 justify-center">
              {/* <span>by {bloggerEmail}</span> |{" "} */}
              <span>{formatDate(createdAt)}</span>
            </h4>
            {image && (
              <div className="mb-6">
                <Image
                  src={image}
                  alt="Not found your image."
                  width={800}
                  height={500}
                  className="rounded-lg w-full object-cover h-64 sm:h-80 lg:h-96"
                />
              </div>
            )}
            <div className="text-gray-600 mb-6 space-y-2">
              <div className="flex items-center">
                <span className="font-semibold w-28">Category:</span>
                <span>{category}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-28">Author:</span>
                {/* <span>{bloggerEmail}</span> */}
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-28">Created at:</span>
                <span>{formatDate(createdAt)}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-28">Updated at:</span>
                <span>{formatDate(updatedAt)}</span>
              </div>
            </div>

            <div
              className="p-3 max-w-2xl mx-auto w-full prose prose-lg post-content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error", error);
    return (
      <div className="text-red-500 text-center mt-4">
        Error fetching chapter
      </div>
    );
  }
}

export default Chapter;
