import PaginationBar from "@/components/PaginationBar";
import { prisma } from "@/lib/db/prisma";
import SpokenRuleCard from "@/components/SpokenRuleCard";
import SectionTitle from "@/components/SectionTitle";

// Define the type for Home component props
interface SpokenRulesProps {
  searchParams: { page?: string };
}

export default async function SpokenRules({
  searchParams: { page = "1" },
}: SpokenRulesProps) {
  const currentPage = parseInt(page);

  const limit = 100;
  const heroItemCount = 1;

  const totalItemCount = await prisma.spokenRule.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / limit);

  const spokenRules = await prisma.spokenRule.findMany({
    // where: {
    //   // category: "preposition", // Filter based on the category
    // },
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * limit + (currentPage === 1 ? 0 : heroItemCount),
    take: limit + (currentPage === 1 ? heroItemCount : 0),
    include: {
      author: {
        select: {
          image: true,
          email: true,
          name: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col items-center">
      <SectionTitle title={`Spoken Rules ${totalItemCount}`} />
      {spokenRules?.map((rule) => (
        <SpokenRuleCard key={rule.id} rule={rule} />
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
