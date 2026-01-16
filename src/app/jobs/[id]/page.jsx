import { getSingleJob } from "@/actions/server/jobs";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Briefcase,
  DollarSign,
  CalendarDays,
  Clock,
  ArrowLeft,
} from "lucide-react";

const page = async ({ params }) => {
  const { id } = await params;
  const job = await getSingleJob(id);
//   console.log(job)

  if (!job) notFound();

  const {
    title,
    company,
    location,
    salary,
    jobType,
    experience,
    description,
    requirements,
    postedDate,
  } = job;

  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-16 space-y-8">

      {/* HEADER */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full text-sm font-semibold text-indigo-600 bg-indigo-50">
          <Briefcase className="w-4 h-4" />
          Job Details
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <span className="font-medium">{company}</span>
        </div>
      </div>

      {/* meta*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Meta icon={Briefcase} label="Job Type" value={jobType} />
        <Meta icon={Clock} label="Experience" value={experience} />
        <Meta icon={DollarSign} label="Salary" value={salary} />
        <Meta icon={CalendarDays} label="Posted" value={postedDate} />
      </div>

      {/* description */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold mb-3 text-gray-900">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* REQUIREMENTS */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold mb-3 text-gray-900">
          Requirements
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {requirements}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/login"
          className="inline-flex justify-center px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold
                     hover:bg-indigo-700 transition shadow-md"
        >
          Apply Now
        </Link>

        <Link
          href="/jobs"
          className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-xl border border-gray-200
                     text-gray-700 hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>
      </div>
    </div>
  );
};

/* Meta Card */
const Meta = ({ icon: Icon, label, value }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800">
          {value}
        </p>
      </div>
    </div>
  </div>
);

export default page;
