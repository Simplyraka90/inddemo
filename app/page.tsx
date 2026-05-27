import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-gray-100 selection:bg-rose-600 selection:text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Portfolio */}
      <Portfolio />

      {/* Clients */}
      <Clients />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

    </main>
  );
}