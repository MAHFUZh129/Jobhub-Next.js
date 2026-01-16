import { getJobs } from "@/actions/server/jobs";
import JobCard from "@/components/card/JobCard";

export default async function ItemsPage() {
  const jobs = await getJobs();

  return (
    <section className="max-w-7xl mx-auto px-4 pt-24 pb-10 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Available Jobs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
}
