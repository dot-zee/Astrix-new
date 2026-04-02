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
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-144 w-xl rounded-full bg-linear-to-tr from-blue-400/40 via-blue-500/30 to-transparent blur-3xl max-w-screen"></div>
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
