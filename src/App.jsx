import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing React Router for navigation
import Home from "./pages/Home"; // Import the Home page

const ServiceCards = lazy(() => import("./components/ServiceCards"));
const PricingTable = lazy(() => import("./components/PricingTable"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const SearchBar = lazy(() => import("./components/SearchBar"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home page as the route */}
        <Route
          path="/home"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="border-t-transparent border-orange-500 w-8 h-8 border-4 border-solid rounded-full animate-spin"></div>
                </div>
              }
            >
              <ServiceCards />
              <PricingTable />
              <SearchBar />
              <ContactForm />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
