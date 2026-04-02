import { Inter_Tight, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "./components/LoadingContext";
import RevealAnimation from "./components/RevealAnimation";
import LoadingPage from "./components/LoadingPage";

const interTight = Inter_Tight({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Astrix Digital Media",
  description: "Thrive on your success with Astrix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${orbitron.variable} font-sans antialiased default-typography`}>
        {/* <LoadingPage /> */}
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#111",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
        <Navbar />
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
