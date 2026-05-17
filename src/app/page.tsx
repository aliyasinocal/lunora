import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Collections from "@/components/home/Collections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import EditorialSplit from "@/components/home/EditorialSplit";
import Pillars from "@/components/home/Pillars";
import CategoryGrid from "@/components/home/CategoryGrid";
import JournalTeaser from "@/components/home/JournalTeaser";
import InstagramStrip from "@/components/home/InstagramStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Collections />
      <FeaturedProducts />
      <EditorialSplit />
      <Pillars />
      <CategoryGrid />
      <JournalTeaser />
      <InstagramStrip />
    </>
  );
}
