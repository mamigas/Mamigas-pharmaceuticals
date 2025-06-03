export const dynamic = "force-dynamic";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Partners from "@/components/Partners";
import Image from "next/image";
import WorkingHours from "@/components/WorkingHours";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FAQ2 from "@/components/FAQ2";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Cta />
      <WhyChoose />
      <Counter />
      {/* <Partners/> */}
      <Process />
      <FAQ />
      <Testimonials />
      <Blogs />
      <WorkingHours />
    </div>
  );
}
