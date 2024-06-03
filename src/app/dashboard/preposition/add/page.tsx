import SectionTitle from "@/components/SectionTitle";
import PrepositionsForm from "./PrepositionsForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div>
        <SectionTitle title="Add Prepositions" />
        <PrepositionsForm />
      </div>
    </div>
  );
};

export default Home;
