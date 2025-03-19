import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Importing React Router for navigation
import Home from "./pages/Home";  // Import the Home page

const ServiceCards = lazy(() => import("./components/ServiceCards"));
const PricingTable = lazy(() => import("./components/PricingTable"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const SearchBar = lazy(() => import("./components/SearchBar"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Set Home page as the route */}
        <Route path="/home" element={
          <Suspense fallback={<p className="text-center mt-4">Loading...</p>}>
            <ServiceCards />
            <PricingTable />
            <SearchBar />
            <ContactForm />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
