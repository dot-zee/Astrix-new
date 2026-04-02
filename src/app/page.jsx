import Hero from "./components/Hero";
import FAQAccordion from "./components/FAQ";
import Footer05Page from "./components/footer-05/footer-05";
import TrustedBy from "./components/TrustedBy";
import RevealAnimation from "./components/RevealAnimation";
import UnifiedSystem from "./components/UnifiedSystem";
import RevenueLeak from "./components/RevenueLeak";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
     
      <RevealAnimation delay={0.2}>
        <TrustedBy />
      </RevealAnimation>

      <UnifiedSystem />

      <RevenueLeak />

      <FAQAccordion />

      <Footer05Page />
    </>
  );
}
