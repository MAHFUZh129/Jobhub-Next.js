import Link from "next/link";
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  ArrowRight,
  Building2
} from "lucide-react";

export default function JobCard({ job }) {
  const {
    _id,
    title,
    company,
    location,
    salary,
    jobType,
  } = job;

  return (
    <div className="group relative h-full">
      
      {/* Glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 blur transition duration-300 group-hover:opacity-25" />

      {/* Card */}
      <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col h-full">

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600">
            <Briefcase className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700">
            <Briefcase className="w-3.5 h-3.5" />
            {jobType}
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-600">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">
              Salary
            </span>
            <div className="flex items-center gap-1 text-emerald-600 font-bold text-lg">
              {salary}
            </div>
          </div>

          {/* details Button */}
          <Link
            href={`/jobs/${_id}`}
            className="inline-flex items-center gap-1.5 mt-3 px-2 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm
                       hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
