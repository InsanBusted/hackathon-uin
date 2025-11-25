import Header from "@/components/Header/page";
import JobSeeker from "@/components/jobs/jobSeeker/page";

const JobsPage = () => {
  return (
    <div>
      <Header />
      <section>
        <JobSeeker />
      </section>
    </div>
  );
};

export default JobsPage;
