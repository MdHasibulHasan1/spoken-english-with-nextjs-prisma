import SectionTitle from "@/components/SectionTitle";
import PrepositionsForm from "./PrepositionsForm";

const AddPreposition: React.FC = () => {
  return (
    <div className="min-h-screen w-full  bg-gray-100">
      <div>
        <SectionTitle title="Add Prepositions" />
        <PrepositionsForm />
      </div>
    </div>
  );
};

export default AddPreposition;
