import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Gallery from "./components/Gallery";
import Testimonials2 from "./components/Testimonials2";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingHelpIcon from "./components/FloatingHelpIcon";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-purple-50 to-gray-100">
        <Header />
        <Banner />
        <AboutUs />
        <Features />
        <Statistics />
        <Gallery />
        <Courses />
        <Testimonials2 />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;