import { getJobs } from "@/actions/server/jobs";
import JobCard from "@/components/card/JobCard";
import { 
  FiBriefcase, 
  FiSearch, 
  FiArrowRight, 
  FiAlertCircle 
} from "react-icons/fi";

export default async function ItemsPage() {
  const jobs = await getJobs();

  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-25 pb-10 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_45%),radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Header */}
      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100">
          <FiBriefcase className="text-indigo-600" />
          Career Opportunities
        </span>

        <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Explore Available
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
            Job Openings
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          Discover roles that match your skills and passion. Build your career
          with innovative teams and impactful projects.
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 text-indigo-500">
            <span className="h-1 w-10 rounded-full bg-indigo-500" />
            <FiArrowRight />
            <span className="h-1 w-10 rounded-full bg-violet-500" />
          </div>
        </div>
      </div>

      {/* cards */}
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div key={job._id} className="group relative">
              
              {/* Glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 blur transition group-hover:opacity-25" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <JobCard job={job} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-24 rounded-3xl bg-white/70 backdrop-blur-xl border border-dashed border-gray-300">
          <FiAlertCircle className="mx-auto text-5xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            No Jobs Available
          </h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            We don’t have any open positions right now. Please check back soon
            for new opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
