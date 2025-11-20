import Advantage from "./components/home/advantage/page";
import Hero from "./components/home/hero/page";
import JobsComponent from "./components/home/jobs/page";
import Pricing from "./components/home/pricing/page";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Advantage />
      </section>
      <section>
        <JobsComponent />
      </section>
      <section>
        <Pricing />
      </section>
    </>
  );
}
