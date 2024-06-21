import PaginationBar from "@/components/PaginationBar";
import ConjunctionCard from "@/components/ConjunctionCard";
import { prisma } from "@/lib/db/prisma";

// Define the type for Home component props
interface ConjunctionsProps {
  searchParams: { page?: string };
}

export default async function Conjunctions({
  searchParams: { page = "1" },
}: ConjunctionsProps) {
  const currentPage = parseInt(page);

  const pageSize = 1;
  const heroItemCount = 1;

  const totalItemCount = await prisma.conjunction.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const conjunctions = await prisma.conjunction.findMany({
    orderBy: { serialNumber: "asc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
    include: {
      examples: true,
    },
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-purple-800 tracking-wide relative py-2">
        <span className="block mb-2">Conjunctions & Linkers</span>
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></span>
      </h1>
      {conjunctions?.map((conjunction) => (
        <ConjunctionCard key={conjunction.id} conjunction={conjunction} />
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
