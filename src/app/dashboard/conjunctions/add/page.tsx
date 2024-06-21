import SectionTitle from "@/components/SectionTitle";
import ConjunctionForm from "./ConjunctionForm";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <SectionTitle title="Add a Conjunction" />
      <ConjunctionForm />
    </div>
  );
}
