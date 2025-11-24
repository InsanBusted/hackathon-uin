import FindJobs from "./findJobs/page";
import Hero from "./hero/page";

export default function JobSeeker() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#63D9FA] to-[#F5F5F5]">
      <section className="pt-5">
        <Hero />
      </section>
      <section className="pt-5">
        <FindJobs />
      </section>
      <section>
      </section>
      {/* <section>
        <Pricing />
      </section> */}
    </div>
  );
}