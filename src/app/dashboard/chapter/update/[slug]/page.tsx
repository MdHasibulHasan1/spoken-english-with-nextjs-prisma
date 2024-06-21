import { prisma } from "@/lib/db/prisma";
import React from "react";
import ChapterEditForm from "../chapterEditForm";

async function UpdateChapter({ params }: { params: { slug: string } }) {
  const chapterId = parseInt(params.slug, 10);

  if (isNaN(chapterId)) {
    return <div>Invalid chapter ID</div>;
  }

  try {
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: params.slug,
      },
    });

    if (!chapter) {
      return <div>chapter id not fount</div>;
    }

    return (
      <div className="w-full">
        <ChapterEditForm key={chapter.id} chapter={chapter} />
      </div>
    );
  } catch (error) {
    console.log("Error", error);
    return <div>Error fetching chapter</div>;
  }
}

export default UpdateChapter;
