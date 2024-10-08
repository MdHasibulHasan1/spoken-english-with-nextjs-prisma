import React from "react";
import PrepositionCard from "@/components/PrepositionCard";
import prepositionsData from "./data";
import Link from "next/link";
function Preposition() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link href="/preposition2" className="mt-5 mb-2 inline-block">
        <button className="btn btn-primary bg-blue-500">Back to db</button>
      </Link>
      <div className="container mx-auto">
        {prepositionsData?.map((preposition, index) => (
          <PrepositionCard key={index} preposition={preposition} />
        ))}
      </div>
    </div>
  );
}

export default Preposition;
