import PaginationBar from "@/components/PaginationBar";
import { prisma } from "@/lib/db/prisma";
import SectionTitle from "@/components/SectionTitle";
import PostCard from "@/components/PostCard";

// Define the type for Home component props
interface PostProps {
  searchParams: { page?: string };
}

export default async function Posts({
  searchParams: { page = "1" },
}: PostProps) {
  const currentPage = parseInt(page);

  const pageSize = 1;
  const heroItemCount = 1;

  const totalItemCount = await prisma.chapter.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const posts = await prisma.chapter.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      <SectionTitle title="Posts" />
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
        // <div key={post.id}>{post.bloggerEmail}</div>
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
