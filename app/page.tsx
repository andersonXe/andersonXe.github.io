import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import LiveMockup from "./components/LiveMockup";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <Differentiators />
        <LiveMockup />
        <Process />
        <Pricing />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
