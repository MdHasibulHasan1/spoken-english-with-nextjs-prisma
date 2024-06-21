import EmailForm from "./EmailForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Contact Us
        </h1>
        <EmailForm />
      </div>
    </div>
  );
}
