import PaginationBar from "@/components/PaginationBar";
import ConjunctionCard from "@/components/ConjunctionCard";
import { prisma } from "@/lib/db/prisma";
import SectionTitle from "@/components/SectionTitle";

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
  });

  return (
    <div className="flex flex-col items-center">
      <SectionTitle title="Conjunctions & Linkers" />
      {conjunctions?.map((conjunction) => (
        <ConjunctionCard key={conjunction.id} conjunction={conjunction} />
      ))}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
