import PaginationBar from "@/components/PaginationBar";
import { prisma } from "@/lib/db/prisma";
import SpokenRuleCard from "@/components/SpokenRuleCard";
import { SpokenRule } from "@/types/types";

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

  const spokenRules: SpokenRule[] = await prisma.spokenRule.findMany({
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
