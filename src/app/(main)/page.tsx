import PaginationBar from "@/components/PaginationBar";
import BlogCard from "@/components/BlogCard";
import Blog2 from "@/components/Blog2";
import LongSentences from "@/components/LongSentences";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import SpokenRuleCard from "@/components/SpokenRuleCard";

// Define the type for a blog post
interface Blog {
  bloggerName: string | null;
  bloggerImage: string | null;
  bloggerEmail: string;
  structure: string;
  description: string;
  category: string;
  status: string;
  id: string;
  date: string;
  examples: string[];
  favorites: string[];
  modified_time: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the type for Home component props
interface HomeProps {
  searchParams: { page?: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 3;
  const heroItemCount = 1;

  const totalItemCount = await prisma.spokenRule.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const spokenRules: Blog[] = await prisma.spokenRule.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      {spokenRules?.map((rule) => (
        <SpokenRuleCard key={rule.id} {...rule} />
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
