import EverythingUneed from "@/components/EverythingUneed";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import Product from "@/components/Product";
import SignUp from "@/components/SignUp";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Product />
      <EverythingUneed />
      <Prices />
      <Testimonials />
      <SignUp />
    </main>
  );
}
