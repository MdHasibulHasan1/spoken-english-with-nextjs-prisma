import PaginationBar from "@/components/PaginationBar";
import PrepositionCard from "@/components/PrepositionCard"; // Make sure you have this component
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db/prisma";

// Define the type for Home component props
interface PrepositionsProps {
  searchParams: { page?: string };
}

export default async function Prepositions({
  searchParams: { page = "1" },
}: PrepositionsProps) {
  const currentPage = parseInt(page);

  const pageSize = 1;
  const heroItemCount = 1;

  const totalItemCount = await prisma.preposition.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const prepositions = await prisma.preposition.findMany({
    orderBy: { serialNumber: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      <SectionTitle title="Prepositions" />
      {prepositions?.map((preposition) => (
        <PrepositionCard key={preposition.id} preposition={preposition} />
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
