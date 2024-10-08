import Benefits from "@/components/home/benefits";
import FAQSection from "@/components/home/faq";
import HeroSection from "@/components/home/hero";
import Join from "@/components/home/join";
import Price from "@/components/home/price";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";


export default function Home() {
  return (
   <main>
    <Header />
    <HeroSection />
    <Benefits />
    <Price />
    <FAQSection />
    <Join />
    <Footer />
   </main>
  );
}
