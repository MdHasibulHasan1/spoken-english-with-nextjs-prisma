import SectionTitle from "@/components/SectionTitle";
import AddRuleForm from "./RuleForm";

const AddPreposition: React.FC = () => {
  return (
    <div className="min-h-screen w-full  bg-gray-100">
      <div>
        <SectionTitle title="Add Spoken Rule" />
        <AddRuleForm />
      </div>
    </div>
  );
};

export default AddPreposition;
