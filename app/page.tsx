import Header from "@/components/Header/page";
import Advantage from "@/components/home/advantage/page";
import Hero from "@/components/home/hero/page";
import JobsComponent from "@/components/home/jobs/page";
import TestimonialPage from "@/components/home/tetimonial/page";
// import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className="pt-5 bg-linear-to-b from-[#63D9FA] to-[#F5F5F5]">
        <Hero />
      </section>
      <section>
        <JobsComponent />
      </section>
      <section>
        <Advantage />
      </section>
      <section>
        <TestimonialPage />
      </section>
    </div>
  );
}
