import Header from "../components/Header";
import image from "../assets/hero-section.png";
import { headingContext } from "../context.js";

const LandingPage = () => {
  const { heading } = headingContext();

  return (
    <div className="min-h-screen bg-[#fff9f4] flex flex-col">
      <Header />

      <main className="flex flex-col md:flex-row w-full flex-grow">
        <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:w-2/3 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-xl">
            {heading}
          </h1>

          <p className="text-gray-700 max-w-md">
            Powerful AI solutions that go beyond mere data sorting and
            exploration. Use our array of AI-enabled solutions that understand
            your business and recommend the optimal way forward.
          </p>

          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition w-fit">
            Get started
          </button>
        </div>

        <div className="hidden md:block md:w-1/3 relative">
          <img
            src={image}
            alt="Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
