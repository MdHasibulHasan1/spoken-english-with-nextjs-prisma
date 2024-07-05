import SectionTitle from "@/components/SectionTitle";
import PrepositionFormWithZod from "./PrepositionFormWithZod";

const AddPreposition: React.FC = () => {
  return (
    <div className="min-h-screen w-full  bg-gray-100">
      <div>
        <SectionTitle title="Add Prepositions" />
        <PrepositionFormWithZod />
      </div>
    </div>
  );
};

export default AddPreposition;
