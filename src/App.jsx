import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";

import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Services from "./sections/Services";
import Doctors from "./sections/Doctors";
import Process from "./sections/Process";
import NewPatients from "./sections/NewPatients";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import AppointmentCTA from "./sections/AppointmentCTA";
import Location from "./sections/Location";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Doctors />
        <Process />
        <NewPatients />
        <Testimonials />
        <FAQ />
        <AppointmentCTA />
        <Location />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}