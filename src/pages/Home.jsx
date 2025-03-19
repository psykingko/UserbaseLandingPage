import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-4xl mx-auto mt-8">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;