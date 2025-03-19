import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/home"); // Redirect to the Home page
  };
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/desmumtz13.jpg')",
        backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the image
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-white bg-opacity-80 text-white p-8 rounded-xl text-center">
        <h1 className="text-4xl text-[#2A1A5E]  font-bold">
          Welcome to House Of Marktech
        </h1>
        <p className="mt-4 text-[#2A1A5E] text-lg">
          We provide amazing services for your needs.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 bg-[#2A1A5E] px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
